const mongoose = require("mongoose");
require("dotenv").config();

const DB_URL = process.env.DB_URL;

const db_connection = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Database connection established");
  } catch (error) {
    console.log("Database connection error: " + error);
  }
};

module.exports = db_connection;
