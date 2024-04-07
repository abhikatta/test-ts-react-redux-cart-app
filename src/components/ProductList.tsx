import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../redux/types/stateTypes";

import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
const API_ENDPOINT = "https://fakestoreapi.com/products";
const ProductList = () => {
  const products = useSelector(
    (state: StateType) => state.allProducts.products
  );
  const dispatch = useDispatch();

  const fetchProductData = async () => {
    const localData = localStorage.getItem("products");
    if (localData) {
      dispatch(setProducts(JSON.parse(localData)));
    } else {
      const res = await fetch(API_ENDPOINT);
      const data = await res.json();
      localStorage.setItem("products", JSON.stringify(data));
      dispatch(setProducts(data));
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return products.map((product) => ProductComponent(product));
};

export default ProductList;
