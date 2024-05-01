import { CREATE, FETCH_ALL, FETCH_A_PRODUCT } from "../constants/product";

const productReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...state.products, action.payload];
    case FETCH_A_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

export default productReducer;
