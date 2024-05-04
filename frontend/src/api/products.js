import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/api/products",
});

export const fetchAll = (page) => instance.get(`?page=${page}`);
export const fetchProductsBySearch = (search) =>
  instance.get(`/search?search=${search}`);
export const postProduct = (postForm) => instance.post("/", postForm);
export const fetchProduct = (id) => instance.get("/:id");
