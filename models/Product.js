const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      max: 32,
      unique: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      maxlength: 10,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = new mongoose.model("Product", productSchema);

module.exports = Product;
