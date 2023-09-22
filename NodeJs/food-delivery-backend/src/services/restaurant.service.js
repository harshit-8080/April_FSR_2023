const {
  generateSalt,
  hashPassword,
  decodePassword,
} = require("../utils/passwordHelper");
const { createToken } = require("../utils/tokenHelper");
const Restaurant = require("../models/restaurant.model");
const Food = require("../models/food.model");
const Transaction = require("../models/transaction.model");

const createRestaurant = async (body) => {
  const restaurant = {
    name: body.name,
    ownerName: body.ownerName,
    email: body.email,
    address: body.address,
    phone: body.phone,
    rating: body.rating,
    serviceAvailable: false,
  };

  const salt = generateSalt();
  restaurant.password = hashPassword(body.password, salt); // Storing hashed password...

  const result = await Restaurant.create(restaurant);
  const token = createToken(restaurant.email, restaurant.name);

  return { result: result, token: token };
};

const checkEmailPassword = async (restaurant) => {
  const checkRestaurant = await Restaurant.findOne({ email: restaurant.email });

  if (checkRestaurant) {
    const checkPasword = decodePassword(
      restaurant.password,
      checkRestaurant.password
    );
    if (checkPasword) {
      const token = createToken(restaurant.email, checkRestaurant.name);
      return { result: "Logged in Successfully", token: token };
    } else {
      return "Password is Incorrect";
    }
  } else {
    return "Invalid Email Address, Please Correct Email Address";
  }
};

const returnAllRestaurants = async () => {
  const restaurants = await Restaurant.find();

  if (restaurants) {
    return restaurants;
  } else {
    return "No Restaurants";
  }
};

const returnARestaurant = async (id) => {
  const restaurant = await Restaurant.findOne({ _id: id }).populate("foods");
  return restaurant;
};

const toggleServices = async (email) => {
  const restaurant = await Restaurant.findOne({ email: email });
  if (restaurant) {
    restaurant.serviceAvailable = !restaurant.serviceAvailable;
    const response = await restaurant.save();
    return response;
  } else {
    return "No Restaurant Found for this email address";
  }
};

const addFoodToRestaurant = async (email, body) => {
  const restaurant = await Restaurant.findOne({ email: email });

  if (restaurant) {
    const food = {
      restaurantId: restaurant._id,
      name: body.name,
      description: body.description,
      price: body.price,
      foodType: body.foodType,
      cookingTime: body.cookingTime,
      rating: body.rating,
    };
    const response = await Food.create(food);

    restaurant.foods.push(response);
    await restaurant.save();

    return response;
  } else {
    return "No Restaurant Found for this email address";
  }
};

const getTotalAmountService = async (email) => {
  const restaurant = await Restaurant.findOne({ email: email });

  if (!restaurant) {
    return "no restaurant found for this email address";
  }
  const transactions = await Transaction.find({ restaurantId: restaurant._id });

  if (transactions.length == 0) {
    return "no transaction found for this Restaurant";
  }

  let totalAmount = 0;
  transactions.forEach((item) => {
    totalAmount += Number(item.amount);
  });

  return { transactions, totalAmount };
};

const markAsCompleted = async (paymentId) => {
  const transaction = await Transaction.findOne({ _id: paymentId });

  if (!transaction) {
    return "no transaction found for this paymentId";
  }

  if (transaction.paymentStatus == "COMPLETED") {
    return "Payment is already completed";
  }
  transaction.paymentStatus = "COMPLETED";
  await transaction.save();

  return { transaction, result: "Payment is completed now" };
};

module.exports = {
  createRestaurant,
  checkEmailPassword,
  returnAllRestaurants,
  returnARestaurant,
  toggleServices,
  addFoodToRestaurant,
  getTotalAmountService,
  markAsCompleted,
};
