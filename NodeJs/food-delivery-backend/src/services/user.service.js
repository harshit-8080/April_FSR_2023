const User = require("../models/user.model");
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

module.exports = {
  createUser,
  returnAllUsers,
  checkEmailPassword,
  userByEmail,
};
