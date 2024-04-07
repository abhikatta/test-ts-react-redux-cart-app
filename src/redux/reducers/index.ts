import { combineReducers } from "redux";
import { productReducer, selectProductReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  selectedProduct: selectProductReducer,
});

export default reducers;
