import { combineReducers } from "redux";

import productReducer from "./products";
import authReducer from "./auth";

export default combineReducers({
  products: productReducer,
  auth: authReducer,
});
