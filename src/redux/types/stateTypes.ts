import { Product } from ".";

interface StateType {
  allProducts: { products: Product[] };
  selectedProduct: { product: Product };
}

export type { StateType };
