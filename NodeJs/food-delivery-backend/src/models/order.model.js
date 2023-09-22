const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const orderSchema = new Schema(
  {
    restaurantId: {
      type: String,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    orderDate: {
      type: Date,
      required: true,
    },
    remarks: {
      type: String,
    },
    items: [
      {
        food: { type: Schema.Types.ObjectId, ref: "Food", required: true },
        units: { type: Number, required: true },
      },
    ],
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
      },
    },
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
