import actionTypes from "../types/actionTypes";
import { Action, Product } from "../types";
const ProductsArray: Product[] = [];
const selectedProduct: null | Product = null;
const allProductsInitialState = {
  products: ProductsArray,
};

const selectedProductInitialState = {
  product: selectedProduct,
};
const productReducer = (state = allProductsInitialState, action: Action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
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

export { productReducer, selectProductReducer };
