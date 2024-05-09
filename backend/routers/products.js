import express from "express";

import auth from "../middlewares/auth.js";

import {
  getAllProducts,
  getProductsBySearch,
  postProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.js";

const router = express.Router();

//GET ALL PRODUCTS
router.get("/", getAllProducts);

//GET PRODUCTS BY SEARCH
router.get("/search", getProductsBySearch);

//GET A PRODUCT
router.get("/:id", getSingleProduct);

//POST A PRODUCT
router.post("/", auth, postProduct);

//UPDATE A PRODUCT
router.patch("/:id", auth, updateProduct);

//DELETE A PRODUCT
router.delete("/:id", auth, deleteProduct);

export default router;
