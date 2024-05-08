import Product from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
  const { page = 1 } = req.query;
  try {
    const LIMIT = 8;
    console.log(req.query);
    const startIndex = (Number(page) - 1) * LIMIT;
    const total = await Product.countDocuments({});

    const query = Product.find({});
    const products = await query
      .sort({ createdAt: -1 })
      .limit(LIMIT)
      .skip(startIndex)
      .exec();
    res.status(200).json({
      data: products,
      curPage: Number(page),
      NumberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    res.status(500).json({ error: "Cannot fetch from db" });
  }
};

export const getProductsBySearch = async (req, res) => {
  const { search } = req.query;
  try {
    const searchQuery = new RegExp(search, "i");
    const products = await Product.find({ name: searchQuery }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      data: products,
    });
  } catch (error) {
    res.status(500).json({ error: "Cannot fetch from db" });
  }
};

export const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    console.log(req.userId);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error });
    console.log(error);
  }
};

export const postProduct = async (req, res) => {
  try {
    const reqForm = req.body;

    const productForm = {
      creater: String(req.userId),
      name: reqForm.name,
      product: reqForm.product,
      price: Number(reqForm.price),
      currency: reqForm.currency,
      instock: Number(reqForm.instock),
      type: reqForm.type,
      description: reqForm.description,
      selectedFile: reqForm.selectedFile,
    };

    const product = await Product.create(productForm);
    console.log("product", product);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) throw Error("We cannot find product with this id");
    res.status(200).json(product);
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
