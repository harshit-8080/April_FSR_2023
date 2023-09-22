const express = require("express");
const {
  signupUser,
  getAllUsers,
  loginUser,
  getUserByEmail,
  addToCart,
  getCart,
  deleteCart,
  createPayment,
  getAPayment,
  getAllPayment,
  createOrder,
  getOrders,
} = require("../controllers/user.controller");
const authToken = require("../middlewares/auth-token");

// function middle1(req, res, next) {
//   console.log("MiddleWare 1 ");
//   next();
// }

// function middle2(req, res, next) {
//   console.log("MiddleWare 2 ");
//   next();
// }

// function middle3(req, res, next) {
//   console.log("MiddleWare 3 ");
//   next();
// }

const UserRouter = express.Router();

// Create User API
UserRouter.post("/users", signupUser);

// get all Users API
UserRouter.get("/users", authToken, getAllUsers);

// Login Users API
UserRouter.post("/login", loginUser);

// Get Me API
UserRouter.get("/me", authToken, getUserByEmail);

// add foods to Cart
UserRouter.post("/add", authToken, addToCart);

// get My Cart Item
UserRouter.get("/cart", authToken, getCart);

// Delete all foods from Cart
UserRouter.delete("/cart", authToken, deleteCart);

// Create a payment or transaction
UserRouter.post("/payment", authToken, createPayment);

// Get a payment or transaction
UserRouter.get("/payment/:paymentId", authToken, getAPayment);

// Get all my  payments or transactions
UserRouter.get("/payments", authToken, getAllPayment);

// create a order
UserRouter.post("/orders", authToken, createOrder);

// get all order
UserRouter.get("/orders", authToken, getOrders);

module.exports = UserRouter;
