import Product from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const { creater, sort } = req.query;
    const query = Product.find({});
    if (sort) query.sort({ createdAt: -1 });
    if (creater) query.where("creater").equals(creater);

    const products = await query.exec();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ error: "Cannot fetch from db" });
  }
};

export const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const postProduct = async (req, res) => {
  try {
    const reqForm = req.body;
    const productForm = {
      creater: reqForm.creater,
      name: reqForm.name,
      price: Number(reqForm.price),
      currency: reqForm.currency,
      instock: Number(reqForm.instock),
      type: reqForm.type,
      description: reqForm.description,
    };
    console.log(productForm);

    const product = await Product.create(productForm);
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) throw Error("We cannot find product with this id");
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productForm = req.body;
    const product = await Product.findByIdAndUpdate(id, productForm);
    if (!product) throw Error("There is no product with this id");
    res.status(200).json({ product: { ...product.product, ...productForm } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
