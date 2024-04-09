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
      console.log(state.products);

      const existingProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        const updatedProducts = [...state.products];
        updatedProducts[existingProductIndex] = {
          ...updatedProducts[existingProductIndex],
          quantity: updatedProducts[existingProductIndex].quantity + 1,
        };
        return { products: updatedProducts };
      } else {
        return {
          products: [...state.products, { ...action.payload, quantity: 1 }],
        };
      }

    case actionTypes.REMOVE_FROM_CART:
      const productIndexToRemove = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndexToRemove !== -1) {
        const updatedProducts = [...state.products];
        if (updatedProducts[productIndexToRemove].quantity > 1) {
          updatedProducts[productIndexToRemove] = {
            ...updatedProducts[productIndexToRemove],
            quantity: updatedProducts[productIndexToRemove].quantity - 1,
          };
        } else {
          updatedProducts.splice(productIndexToRemove, 1);
        }
        return { products: updatedProducts };
      }
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
