export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  lager: number;
  category: string;
}

export interface Cart extends Product {
  count: number;
}

export interface User {
  _id: string;
  name: string;
  token: string;
}

export interface Category {
  _id: string;
  name: string;
}
