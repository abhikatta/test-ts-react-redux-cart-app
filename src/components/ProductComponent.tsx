import { Link } from "react-router-dom";
import { Product } from "../redux/types";

const ProductComponent = (product: Product) => {
  return (
    <div className="bg-slate-300 rounded-md flex flex-col justify-center items-center py-3">
      <Link key={product.id} to={`/product/${product.id}`}>
        <div className="w-auto h-auto flex flex-col justify-center items-center px-4 py-2">
          <img width={100} src={product.image} alt={product.title}></img>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      </Link>
      <div>
        <button className=" bg-slate-600 text-white  hover:bg-slate-400 hover:text-black duration-150 rounded-md px-4 py-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductComponent;
