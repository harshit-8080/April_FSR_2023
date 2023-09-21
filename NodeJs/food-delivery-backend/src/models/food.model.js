const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const foodSchema = new Schema(
  {
    restaurantId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    price: {
      type: String,
      required: true,
    },
    foodType: {
      type: String,
      required: true,
    },
    cookingTime: {
      type: String,
      required: false,
    },
    rating: {
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

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
