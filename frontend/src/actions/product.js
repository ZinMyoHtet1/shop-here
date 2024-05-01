import * as api from "../api/products";
import { CREATE, FETCH_ALL, FETCH_A_PRODUCT } from "../constants/product";

export const getAllProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAll();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchProduct();
    dispatch({ type: FETCH_A_PRODUCT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

//POST NEW PRODUCT
export const postNewProduct = (postForm) => async (dispatch) => {
  try {
    const { data } = await api.postProduct(postForm);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
