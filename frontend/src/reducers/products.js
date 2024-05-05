import {
  CREATE,
  DELETE_PRODUCT,
  END_LOADING,
  FETCH_ALL,
  FETCH_A_PRODUCT,
  FETCH_PRODUCTS_SEARCH,
  START_LOADING,
} from "../constants/product";

const productReducer = (state = { isLoading: true, products: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case END_LOADING:
      return {
        ...state,
        isLoading: false,
      };
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
      return { ...state, products: [...state.products, action.payload] };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload._id
        ),
      };
    case FETCH_A_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

export default productReducer;
