import express from "express";
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
router.post("/", postProduct);

//UPDATE A PRODUCT
router.patch("/:id", updateProduct);

//DELETE A PRODUCT
router.delete("/:id", deleteProduct);

export default router;
