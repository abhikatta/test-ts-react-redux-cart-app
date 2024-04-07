import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../redux/types/stateTypes";

import { fetchProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
const API_ENDPOINT = "https://fakestoreapi.com/products";
const ProductList = () => {
  const products = useSelector(
    (state: StateType) => state.allProducts.products
  );
  const dispatch = useDispatch();

  //   const fetchProductData = async () => {
  //     const res = await fetch(API_ENDPOINT);
  //     const data = await res.json();
  //     dispatch(setProducts(data));
  //   };

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
