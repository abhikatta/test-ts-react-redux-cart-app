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
      <div className="h-screen w-screen flex flex-col md:flex-row items-center justify-center px-4 py-2 gap-3">
        <img src={product.image} alt={product.title} width={300}></img>
        <div className="flex max-w-[40%] flex-col justify-center gap-3">
          <p className="text-2xl">{product.title}</p>
          <p className="">{product.description}</p>
          <p className="text-md">
            Rating: {product.rating.rate} {"("}
            {product.rating.count}
            {")"}
          </p>
          <p className="text-3xl">Price: ${product.price}</p>
        </div>
      </div>
    )
  );
};

export default ProductDetail;
