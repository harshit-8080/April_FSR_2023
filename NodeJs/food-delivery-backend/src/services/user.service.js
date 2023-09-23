const User = require("../models/user.model");
const Food = require("../models/food.model");
const Restaurant = require("../models/restaurant.model");
const {
  generateSalt,
  hashPassword,
  decodePassword,
} = require("../utils/passwordHelper");
const { createToken } = require("../utils/tokenHelper");
const Transaction = require("../models/transaction.model");
const Order = require("../models/order.model");
const {
  generateOTP,
  expiry_time,
  sendOTP,
  sendMailToRestaurant,
} = require("../utils/otpHelper");
const mailConfig = require("../config/mail.config");

const createUser = async (body) => {
  const user = {
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    address: body.address,
    phone: body.phone,
    verified: "false",
    otp: generateOTP(),
    otp_expiry: expiry_time(),
  };

  const salt = generateSalt();
  user.password = hashPassword(body.password, salt); // Storing hashed password...

  const result = await User.create(user);

  // sending OTP to Your Phone Number
  await sendOTP(user.otp, user.phone);

  return { result, msg: "OTP sent to your phone number" };
};

const returnAllUsers = async () => {
  const result = await User.find();
  return result;
};

const checkEmailPassword = async (user) => {
  const checkUser = await User.findOne({ email: user.email });

  if (checkUser) {
    const checkPasword = decodePassword(user.password, checkUser.password);
    if (checkPasword) {
      const token = createToken(user.email, checkUser.firstName);
      return { result: "Logged in Successfully", token: token };
    } else {
      return "Password is Incorrect";
    }
  } else {
    return "Invalid Email Address, Please Correct Email Address";
  }
};

const userByEmail = async (email) => {
  const user = await User.findOne({ email: email });

  if (user) {
    return user;
  } else {
    return "No User Found with this email";
  }
};

const addFoodToMyCart = async (email, foodId, unit) => {
  const user = await User.findOne({ email: email });
  if (user && user.verified) {
    const food = await Food.findOne({ _id: foodId });

    const res = await Restaurant.findOne({ _id: food.restaurantId });

    if (!res.serviceAvailable) {
      return "Cannot Add food because restaurant is not available";
    }

    if (!food) {
      return "No Food Found with this Food ID";
    }

    if (user.carts.length == 0 && unit > 0) {
      user.carts.push({ food: foodId, unit: unit });
    } else {
      let foodMatched = false;
      user.carts.forEach((f) => {
        if (f.food.toString() == food._id) {
          foodMatched = true;
          if (unit > 0) {
            f.unit = unit;
          } else if (unit == 0) {
            user.carts.remove(f);
          }
        }
      });
      if (!foodMatched && unit > 0) {
        user.carts.push({ food: foodId, unit: unit });
      }
    }

    const response = await user.save();
    return response;
  } else {
    return "No User Found with this email";
  }
};

const getMyCartInfo = async (email) => {
  const user = await User.findOne({ email: email }).populate("carts.food");

  if (user) {
    return user;
  } else {
    return "No User Found with this email";
  }
};

const clearCart = async (email) => {
  const user = await User.findOne({ email: email });
  if (user) {
    if (user.carts.length == 0) {
      return "cart is already empty";
    } else {
      user.carts = [];
      await user.save();
      return user;
    }
  } else {
    return "No User Found with this email";
  }
};

const createPaymentService = async (email, body) => {
  const user = await User.findOne({ email: email });

  if (user && user.verified) {
    const transaction = {
      userId: user._id,
      restaurantId: body.restaurantId,
      amount: body.amount,
      paymentMode: body.paymentMode,
    };
    if (body.paymentMode == "COD") {
      transaction.paymentStatus = "PENDING";
    } else {
      transaction.paymentStatus = "COMPLETED";
    }

    const result = await Transaction.create(transaction);

    return result;
  } else {
    return "No user found with this email";
  }
};

const getAPaymentService = async (paymentId) => {
  const result = await Transaction.findOne({ _id: paymentId });
  if (!result) {
    return "Invalid Payment ID";
  }
  return result;
};

const getAllMyPayments = async (email) => {
  const user = await User.findOne({ email: email });
  if (user) {
    const result = await Transaction.find({ userId: user._id });
    if (!result) {
      return "No Transaction Found for this user";
    }
    return result;
  } else {
    return "No user found with this email";
  }
};

const createOrderService = async (email, body) => {
  const user = await User.findOne({ email: email });

  if (!user || !user.verified) {
    return "No user found with this email";
  }

  const items = body.items;
  const foodIdsArray = items.map((i) => {
    return i.food;
  });

  const foodArray = await Food.find({ _id: { $in: foodIdsArray } });

  let totalAmount = 0;

  for (let i = 0; i < items.length; i++) {
    totalAmount += foodArray[i].price * items[i].units;
  }

  const order = {
    restaurantId: body.restaurantId,
    totalAmount: totalAmount,
    orderDate: new Date(),
    remarks: body.remarks,
    items: body.items,
  };

  const result = await Order.create(order);
  user.orders.push(result);
  await user.save();

  await mailConfig.sendMail({
    from: process.env.Email,
    to: user.email,
    subject: "Order Placed Successfully",
    text: `Your Order is Booked Successfully, Total Amount Paid - ${totalAmount}`,
  });

  // const restaurant = await Restaurant.findOne({ _id: body.restaurantId });
  // await sendMailToRestaurant(restaurant.phone, user.firstName, user.address);
  // await mailConfig.sendMail({
  //   from: process.env.Email,
  //   to: restaurant.email,
  //   subject: "New Order Booked for Your Restaurant",
  //   text: `Order Details are -> ,Total Amount Paid - ${totalAmount}`,
  // });

  return { result, mailStatus: "Mail Sent Successfully" };
};

const getAllMyOrders = async (email) => {
  const user = await User.findOne({ email: email }).populate("orders");

  if (!user) {
    return "No user found with this email";
  }

  return user;
};

const verifyMyAccount = async (email, otp) => {
  const user = await User.findOne({ email: email });

  if (!user) {
    return "No user found with this email";
  }
  if (user.verified) {
    return "Your Account is already verified";
  }

  if (new Date() > user.otp_expiry) {
    user.otp = generateOTP();
    user.otp_expiry = expiry_time();
    await user.save();
    await sendOTP(user.otp, user.phone);

    return "Your OTP is Expired, Sent new OTP on your contact number";
  } else if (user.otp == Number(otp)) {
    user.verified = true;
    await user.save();
  } else {
    return "OTP is wrong, Try it with correct OTP";
  }

  return user;
};

module.exports = {
  createUser,
  returnAllUsers,
  checkEmailPassword,
  userByEmail,
  addFoodToMyCart,
  getMyCartInfo,
  clearCart,
  createPaymentService,
  getAPaymentService,
  getAllMyPayments,
  createOrderService,
  getAllMyOrders,
  verifyMyAccount,
};
