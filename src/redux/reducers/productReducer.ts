import actionTypes from "../types/actionTypes";
import { Action, CartProduct, Product } from "../types";
import { Dispatch } from "redux";
const productsArray: Product[] = [];
const selectedProduct: null | Product = null;
const cartProducts: CartProduct[] = [];
const allProductsInitialState = {
  products: productsArray,
};

const selectedProductInitialState = {
  product: selectedProduct,
};
const cartProductsInitialState = {
  products: cartProducts,
};
const productReducer = (state = allProductsInitialState, action: Action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case actionTypes.FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
const selectProductReducer = (
  state = selectedProductInitialState,
  action: Action
) => {
  switch (action.type) {
    case actionTypes.SELECT_PRODUCT:
      return { ...state, product: action.payload };
    default:
      return state;
  }
};

const cartReducer = (state = cartProductsInitialState, action: Action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const updatedProducts = [...state.products];
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      return state;

    default:
      return state;
  }
};

// thunks:
const fetchProducts = () => async (dispatch: Dispatch) => {
  const API_ENDPOINT = "https://fakestoreapi.com/products";

  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();

    dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: data });
  } catch (error) {
    // Handle any errors here
    console.error("Error fetching products:", error);
  }
};
export { productReducer, selectProductReducer, cartReducer, fetchProducts };
