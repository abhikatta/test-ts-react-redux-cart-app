import { Product } from "../types";
import actionTypes from "../types/actionTypes";

const setProducts = (products: Product[]) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};
const selectProduct = (product: Product | any) => {
  return {
    type: actionTypes.SELECT_PRODUCT,
    payload: product,
  };
};
export { setProducts, selectProduct };
