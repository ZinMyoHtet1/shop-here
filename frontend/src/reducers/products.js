import {
  CREATE,
  FETCH_ALL,
  FETCH_A_PRODUCT,
  FETCH_PRODUCTS_SEARCH,
} from "../constants/product";

const productReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        products: action.payload.data,
        curPage: action.payload.curPage,
        NumberOfPages: action.payload.NumberOfPages,
      };
    case FETCH_PRODUCTS_SEARCH:
      return {
        ...state,
        products: action.payload.data,
      };
    case CREATE:
      return { ...state.products, data: action.payload.product };
    case FETCH_A_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

export default productReducer;
