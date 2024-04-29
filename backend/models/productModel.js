import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
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
    like: Number,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
