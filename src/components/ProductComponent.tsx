import { Link } from "react-router-dom";
import { Product } from "../redux/types";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/actions/productActions";

const ProductComponent = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  return (
    <div
      key={product.id}
      className="w-auto h-auto bg-slate-300 rounded-md flex flex-col justify-center items-center py-3">
      <Link
        className=" min-h-[20rem] flex flex-col items-center"
        to={`/product/${product.id}`}>
        <div className=" flex flex-col justify-center items-center px-4 py-2">
          <img width={100} src={product.image} alt={product.title}></img>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      </Link>
      <button
        className="bg-slate-200 hover:bg-slate-700 hover:text-white duration-300 rounded-md my-2 px-4 py-2"
        onClick={() => {
          dispatch(addProductToCart(product));
        }}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductComponent;
