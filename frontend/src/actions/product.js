import useProductAPI from "../api/products";
import { CREATE, FETCH_ALL, FETCH_A_PRODUCT } from "../constants/product";

const useProductActions = () => {
  const { postProduct, fetchAll, fetchProduct } = useProductAPI();

  const getAllProducts = () => async (dispatch) => {
    try {
      const { data } = await fetchAll();
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = (id) => async (dispatch) => {
    try {
      const { data } = await fetchProduct();
      dispatch({ type: FETCH_A_PRODUCT, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const postNewProduct = (postForm) => async (dispatch) => {
    try {
      const { data } = await postProduct(postForm);
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  return { getAllProducts, getProductById, postNewProduct };
};

export default useProductActions;
