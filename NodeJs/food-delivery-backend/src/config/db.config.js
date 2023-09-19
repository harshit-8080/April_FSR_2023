const mongoose = require("mongoose");
require("dotenv").config();

const DB_URL = process.env.DB_URL;

const dbConnection = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("DB connection established");
  } catch (error) {
    console.log("DB connection Failed");
    console.log("Error: " + error);
  }
};

module.exports = dbConnection;
