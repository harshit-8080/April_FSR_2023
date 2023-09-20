const express = require("express");
const {
  signupRestaurant,
  loginRestaurant,
  getAllRestaurants,
  getARestaurants,
  updateServices,
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

module.exports = RestaurantRouter;
