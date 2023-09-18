const express = require("express");
const { signupUser, getAllUsers } = require("../controllers/user.controller");

const UserRouter = express.Router();

// Create User API
UserRouter.post("/users", signupUser);

// get all Users API
UserRouter.get("/users", getAllUsers);

// Login Users API

module.exports = UserRouter;
