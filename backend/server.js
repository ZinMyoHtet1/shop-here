import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import productRoutes from "./routers/products.js";
import userRoutes from "./routers/user.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to my api");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

mongoose.connect(process.env.MONGOOSE_URL).then(() => {
  app.listen(PORT, () => console.log(`Your server is running port ${PORT}`));
});
