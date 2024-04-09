import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../redux/types/stateTypes";

import ProductComponent from "./ProductComponent";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { fetchProducts } from "../redux/reducers/productReducer";
const ProductList = () => {
  const products = useSelector(
    (state: StateType) => state.allProducts.products
  );
  const dispatch: ThunkDispatch<StateType, {}, Action> = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    products && (
      <div className="w-auto mx-3 my-3  h-auto sm:grid sm:grid-cols-2 flex flex-col md:grid md:grid-cols-4 gap-3 ">
        {products.map((product) => (
          <ProductComponent key={product.id} product={product} />
        ))}
      </div>
    )
  );
};

export default ProductList;
