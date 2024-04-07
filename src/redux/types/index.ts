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

interface Action {
  type: string;
  payload: Product | Product["id"];
}

export type { Action, Product };
