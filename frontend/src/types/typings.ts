export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  lager: number;
  category: string;
}

export interface User {
  _id: string;
  name: string;
  token: string;
}
