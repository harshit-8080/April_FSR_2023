const express = require("express");
const {
  signupRestaurant,
  loginRestaurant,
  getAllRestaurants,
  getARestaurants,
  updateServices,
  addFood,
  getTotalAmounts,
  markPaymentComplete,
} = require("../controllers/restaurant.controller");
const authToken = require("../middlewares/auth-token");

const RestaurantRouter = express.Router();

// Create or SIGN UP User API
RestaurantRouter.post("/restaurants", signupRestaurant);

// Login User API
RestaurantRouter.post("/restaurants/login", loginRestaurant);

// get all restaurants
RestaurantRouter.get("/restaurants", authToken, getAllRestaurants);

// get a restaurant BY ID
RestaurantRouter.get("/restaurants/:id", authToken, getARestaurants);

// get a restaurant BY ID
RestaurantRouter.patch("/restaurants/services", authToken, updateServices);

// add fodds
RestaurantRouter.post("/restaurants/foods", authToken, addFood);

// Get Total Amounts
RestaurantRouter.get("/restaurant/totalAmounts", authToken, getTotalAmounts);

//TODO: IDEALLY -> DELIVERY BOY SHOULD MARK PAYMENT AS COMPLETED FOR COD
RestaurantRouter.get(
  "/complete/payment/:paymentId",
  authToken,
  markPaymentComplete
);

module.exports = RestaurantRouter;
