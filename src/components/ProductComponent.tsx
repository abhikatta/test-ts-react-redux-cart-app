import { Link } from "react-router-dom";
import { Product } from "../redux/types";

const ProductComponent = (product: Product) => {
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
    </div>
  );
};

export default ProductComponent;
