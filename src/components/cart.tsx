import { useSelector } from "react-redux";
import { StateType } from "../redux/types/stateTypes";

const Cart = () => {
  const cartProducts = useSelector((state: StateType) => state.cartProducts);

  return cartProducts.products.length !== 0 ? (
    <div>
      {cartProducts.products.map((product) => {
        return (
          <div>
            <img width={80} src={product.image} />
            <p>{product.title}</p>
            <p>{product.price}</p>
          </div>
        );
      })}
    </div>
  ) : (
    <p>No items in cart...</p>
  );
};

export default Cart;
