import { combineReducers } from "redux";
import {
  cartReducer,
  productReducer,
  selectProductReducer,
} from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  selectedProduct: selectProductReducer,
  cartProducts: cartReducer,
});

export default reducers;
