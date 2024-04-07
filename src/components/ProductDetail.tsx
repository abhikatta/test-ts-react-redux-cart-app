import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { StateType } from "../redux/types/stateTypes";
import { useEffect } from "react";
import { selectProduct } from "../redux/actions/productActions";
const API_ENDPOINT = "https://fakestoreapi.com/products";
const ProductDetail = () => {
  const product = useSelector(
    (state: StateType) => state.selectedProduct.product
  );
  const { productId } = useParams();
  const dispatch = useDispatch();
  const fetchSelectedData = async () => {
    const res = await fetch(`${API_ENDPOINT}/${productId}`);
    const data = await res.json();
    dispatch(selectProduct(data));
  };

  useEffect(() => {
    fetchSelectedData();
  }, [productId]);

  return (
    product && (
      <div>
        <img src={product.image} alt={product.title} width={200}></img>
        <p>{product.title}</p>
        <p>${product.price}</p>
      </div>
    )
  );
};

export default ProductDetail;
