const express = require("express");
const {
  signupUser,
  getAllUsers,
  loginUser,
  getUserByEmail,
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

module.exports = UserRouter;
