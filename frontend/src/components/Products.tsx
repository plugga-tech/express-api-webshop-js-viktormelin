import React from 'react';
import { Product } from '../types/typings';

const Products = ({ products }: { products: Product[] }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <img src='http://via.placeholder.com/170x120' alt='' />
          <p>{product.name}</p>
          <p>{product._id}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
