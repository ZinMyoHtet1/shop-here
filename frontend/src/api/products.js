import axios from "axios";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const instance = axios.create({
  baseURL: "http://localhost:4000/api/products",
});

const useProductApi = () => {
  const location = useLocation();

  const queryParams = queryString.parse(location.search);

  const { sort = "true", page = "1" } = queryParams;

  console.log(sort, page);

  const fetchAll = () => instance.get(`?sort=${sort}&page=${page}`);
  const postProduct = (postForm) => instance.post("/", postForm);
  const fetchProduct = (id) => instance.get("/:id");

  return { fetchAll, postProduct, fetchProduct };
};

export default useProductApi;
