import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/api/products",
});

instance.interceptors.request.use((req) => {
  if (localStorage.getItem("user"))
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user")).accessToken
    }`;
  return req;
});

export const fetchAll = (page) => instance.get(`?page=${page}`);
export const fetchProductsBySearch = (search) =>
  instance.get(`/search?search=${search}`);
export const postProduct = (postForm) => instance.post("/", postForm);
export const deleteProduct = (id) => instance.delete(`/${id}`);
export const fetchProduct = (id) => instance.get(`/${id}`);
export const likePost = (id) => instance.patch(`/like/${id}`);
