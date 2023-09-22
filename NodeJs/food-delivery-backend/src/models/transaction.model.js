const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const transactionSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    restaurantId: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: false,
    },
    paymentStatus: {
      type: String,
      required: true,
    },
    paymentMode: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
      },
    },
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
