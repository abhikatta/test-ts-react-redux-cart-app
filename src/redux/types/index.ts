interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}
interface CartProduct extends Product {
  quantity: number;
}
interface Action {
  type: string;
  payload: Product;
}

export type { Action, Product, CartProduct };
