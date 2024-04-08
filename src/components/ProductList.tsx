import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../redux/types/stateTypes";

import { fetchProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
const ProductList = () => {
  const products = useSelector(
    (state: StateType) => state.allProducts.products
  );
  const dispatch: ThunkDispatch<StateType, {}, Action> = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="w-auto h-screen grid grid-cols-4 gap-3 ">
      {products.map((product) => ProductComponent(product))}
    </div>
  );
};

export default ProductList;
