import { CartProduct, Product } from ".";

interface StateType {
  allProducts: { products: Product[] };
  selectedProduct: { product: Product };
  cartProducts: { products: CartProduct[] };
}

export type { StateType };
