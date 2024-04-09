import { Product } from "../types";
import actionTypes from "../types/actionTypes";

const setProducts = (products: Product[]) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};
const selectProduct = (product: Product) => {
  return {
    type: actionTypes.SELECT_PRODUCT,
    payload: product,
  };
};

const addProductToCart = (cartProduct: Product) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: cartProduct,
  };
};
const removeProductFromCart = (carProduct: Product) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: carProduct,
  };
};
export { setProducts, selectProduct, addProductToCart, removeProductFromCart };
