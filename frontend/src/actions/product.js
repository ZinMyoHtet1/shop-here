import {
  CREATE,
  FETCH_ALL,
  FETCH_A_PRODUCT,
  FETCH_PRODUCTS_SEARCH,
} from "../constants/product";
import * as api from "../api/products";

export const getAllProducts = (page) => async (dispatch) => {
  try {
    const { data } = await api.fetchAll(page);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getProductsBySearch = (search) => async (dispatch) => {
  try {
    const { data } = await api.fetchProductsBySearch(search);
    dispatch({ type: FETCH_PRODUCTS_SEARCH, payload: data });
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

export const postNewProduct = (postForm) => async (dispatch) => {
  try {
    const { data } = await api.postProduct(postForm);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
