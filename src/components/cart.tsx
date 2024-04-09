import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../redux/types/stateTypes";
import {
  addProductToCart,
  removeProductFromCart,
} from "../redux/actions/productActions";
import { useCallback, useMemo } from "react";
import { CartProduct } from "../redux/types";

const Cart = () => {
  const cartProducts = useSelector((state: StateType) => state.cartProducts);
  const dispatch = useDispatch();
  const totalPrice: number = useMemo(() => {
    return cartProducts.products.reduce((sum: number, product: CartProduct) => {
      return sum + product.price * product.quantity;
    }, 0);
  }, [cartProducts.products]);
  const cartItems = useCallback(
    (cartProducts: CartProduct[]) => {
      return (
        <div className="w-auto h-auto sm:grid sm:grid-cols-2 flex flex-col md:grid md:grid-cols-4 gap-3 ">
          {cartProducts.map((product: CartProduct) => (
            <div
              className="py-2 px-4 bg-white w-auto h-auto justify-center items-center flex flex-col  rounded-md"
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
          ))}
        </div>
      );
    },
    [cartProducts.products]
  );

  return cartProducts.products.length !== 0 ? (
    <div className=" w-auto h-auto flex flex-col justify-center items-center">
      <p className="text-3xl font-thin ">
        Total : ${totalPrice.toPrecision(5)}
      </p>
      {cartItems(cartProducts.products)}
    </div>
  ) : (
    <p className="text-center">No items in cart...</p>
  );
};

export default Cart;
