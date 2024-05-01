import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    creater: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    instock: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: String,
    likes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
