const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const chatSchema = new Schema({
  message: {
    type: String,
  },
  user: {
    type: String,
  },
  roomId: {
    type: String,
  },
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
