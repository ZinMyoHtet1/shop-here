import {
  CREATE,
  DELETE_PRODUCT,
  END_LOADING,
  FETCH_ALL,
  FETCH_A_PRODUCT,
  FETCH_PRODUCTS_SEARCH,
  LIKE_POST,
  START_LOADING,
} from "../constants";
import * as api from "../api/products";

export const getAllProducts = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchAll(page);
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getProductsBySearch = (search) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchProductsBySearch(search);
    dispatch({ type: FETCH_PRODUCTS_SEARCH, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteProduct(id);
    dispatch({ type: DELETE_PRODUCT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchProduct(id);
    dispatch({ type: FETCH_A_PRODUCT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateLikePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: LIKE_POST, payload: data });
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
