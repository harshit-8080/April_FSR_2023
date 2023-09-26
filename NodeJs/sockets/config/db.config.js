const mongoose = require("mongoose");

const DB_URL =
  "mongodb+srv://harshittalks71:0eOdL8JJovlWYZ0O@cluster0.6u23tpb.mongodb.net";

const db_connection = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Database connection established");
  } catch (error) {
    console.log("Database connection error: " + error);
  }
};

module.exports = db_connection;
