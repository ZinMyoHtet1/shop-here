import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/api/products",
});

export const fetchAll = () => instance.get("?sort=true");
export const postProduct = (postForm) => instance.post("/", postForm);
export const fetchProduct = (id) => instance.get("/:id");
