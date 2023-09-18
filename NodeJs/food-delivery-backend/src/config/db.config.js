const mongoose = require("mongoose");

const DB_URL =
  "mongodb+srv://harshittalks71:0eOdL8JJovlWYZ0O@cluster0.6u23tpb.mongodb.net/";

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
