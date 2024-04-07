import { Link } from "react-router-dom";
import { Product } from "../redux/types";

const ProductComponent = (product: Product) => {
  return (
    <div key={product.id}>
      <Link to={`/product/${product.id}`}>
        <p>{product.id}</p>
        <p>{product.title}</p>
        <img width={100} src={product.image} alt={product.title}></img>
        <p>{product.price}</p>
      </Link>
    </div>
  );
};

export default ProductComponent;
