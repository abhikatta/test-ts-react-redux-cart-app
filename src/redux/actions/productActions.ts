import { Product } from "../types";
import actionTypes from "../types/actionTypes";
import { Dispatch } from "redux";

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
const API_ENDPOINT = "https://fakestoreapi.com/products";

const fetchProducts = () => async (dispatch: Dispatch) => {
  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();

    dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: data });
  } catch (error) {
    // Handle any errors here
    console.error("Error fetching products:", error);
  }
};

export { setProducts, selectProduct, fetchProducts };
