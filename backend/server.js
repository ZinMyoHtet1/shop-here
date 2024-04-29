import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import productRoutes from "./routers/products.js";

const app = express();
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGOOSE_URL).then(() => {
  app.listen(PORT, () => console.log(`Your server is running port ${PORT}`));
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my api");
});

app.use("/api/products", productRoutes);
