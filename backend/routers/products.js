import express from "express";
import {
  getAllProducts,
  postProduct,
  getSingleProduct,
} from "../controllers/products.js";

const router = express.Router();

//GET ALL PRODUCTS
router.get("/", getAllProducts);

//GET A PRODUCT
router.get("/:id", getSingleProduct);

//POST A PRODUCT
router.post("/", postProduct);

export default router;
