import express from "express";

import auth from "../middlewares/auth.js";

import {
  getAllProducts,
  getProductsBySearch,
  postProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  likeProduct,
} from "../controllers/products.js";

const router = express.Router();

//GET ALL PRODUCTS
router.get("/", getAllProducts);

//POST A PRODUCT
router.post("/", auth, postProduct);

//GET A PRODUCT
router.get("/:id", getSingleProduct);

//GET PRODUCTS BY SEARCH
router.get("/search", getProductsBySearch);

//UPDATE A PRODUCT
router.patch("/:id", auth, updateProduct);

//Like product
router.patch("/like/:id", auth, likeProduct);

//DELETE A PRODUCT
router.delete("/:id", auth, deleteProduct);

export default router;
