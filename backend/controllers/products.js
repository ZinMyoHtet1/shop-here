import Product from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ products });
  } catch (error) {
    res.status(500).json({ error: "Cannot fetch from db" });
  }
};

export const getSingleProduct = (req, res) => {
  res.json({ messg: "get a product" });
};

export const postProduct = (req, res) => {
  res.json({ messg: "post a product" });
};

//<video tabindex="-1" class="video-stream html5-main-video" webkit-playsinline="" playsinline="" controlslist="nodownload" style="width: 409px; height: 230px; left: 6px; top: 0px;" src="blob:https://youtube.googleapis.com/3821a053-ffed-4c0b-81f9-3bd310f7315b"></video>
