const User = require("../models/user.model");
const Food = require("../models/food.model");
const {
  generateSalt,
  hashPassword,
  decodePassword,
} = require("../utils/passwordHelper");
const { createToken } = require("../utils/tokenHelper");

const createUser = async (body) => {
  const user = {
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    address: body.address,
    phone: body.phone,
  };

  const salt = generateSalt();
  user.password = hashPassword(body.password, salt); // Storing hashed password...

  const result = await User.create(user);
  const token = createToken(user.email, user.firstName);

  return { result: result, token: token };
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
  if (user) {
    const food = await Food.findOne({ _id: foodId });
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

module.exports = {
  createUser,
  returnAllUsers,
  checkEmailPassword,
  userByEmail,
  addFoodToMyCart,
  getMyCartInfo,
  clearCart,
};
