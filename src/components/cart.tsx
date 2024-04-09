import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../redux/types/stateTypes";
import {
  addProductToCart,
  removeProductFromCart,
} from "../redux/actions/productActions";

const Cart = () => {
  const cartProducts = useSelector((state: StateType) => state.cartProducts);
  const dispatch = useDispatch();

  return cartProducts.products.length !== 0 ? (
    <div className="w-screen h-auto grid grid-cols-4 gap-3 ">
      {cartProducts.products.map((product) => {
        return (
          <div
            className="py-2 w-auto h-auto justify-center items-center flex flex-col  rounded-md"
            key={product.id}>
            <img width={80} src={product.image} />
            <p>{product.title}</p>
            <p>{product.price}</p>
            <div className=" w-auto h-auto justify-center items-center  flex flex-row gap-3">
              <button
                className="bg-slate-200 hover:bg-slate-700 hover:text-white duration-300 rounded-md my-2 px-4 py-2"
                onClick={() => dispatch(addProductToCart(product))}>
                +
              </button>
              <p>{product.quantity}</p>
              <button
                className="bg-slate-200 hover:bg-slate-700 hover:text-white duration-300 rounded-md my-2 px-4 py-2"
                onClick={() => dispatch(removeProductFromCart(product))}>
                -
              </button>
            </div>
            <p>Price: ${product.price}</p>
          </div>
        );
      })}
    </div>
  ) : (
    <p className="text-center">No items in cart...</p>
  );
};

export default Cart;
