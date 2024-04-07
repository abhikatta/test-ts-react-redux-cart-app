import { Link } from "react-router-dom";
import { Product } from "../redux/types";

const ProductComponent = (product: Product) => {
  return (
    <div
      key={product.id}
      className="bg-cyan-300 rounded-md flex flex-col justify-center items-center">
      <Link
        className=" w-auto h-auto  flex flex-col justify-center items-center"
        to={`/product/${product.id}`}>
        <img width={100} src={product.image} alt={product.title}></img>
        <p>{product.title}</p>
        <p>{product.price}</p>
      </Link>
    </div>
  );
};

export default ProductComponent;
