const jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = (email, firstName) => {
  const token = jwt.sign({ email, firstName }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
  return token;
};

const decodeToken = (token) => {
  const decodeDetails = jwt.verify(token, process.env.JWT_SECRET);
  return decodeDetails;
};

module.exports = {
  createToken,
  decodeToken,
};
