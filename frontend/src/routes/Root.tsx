import { IconSettings, IconShoppingCart } from '@tabler/icons-react';
import { useState } from 'react';
import { Product } from '../types/typings';
import useProducts from '../hooks/useProducts';
import Products from '../components/Products';
import Navbar from '../components/Navbar';
import useCategories from '../hooks/useCategories';

const Root = () => {
  const products = useProducts();
  const categories = useCategories();

  return (
    <div>
      <Navbar showCart={true} />
      <div>
        {products.loading || categories.loading ? (
          <p>Produkterna laddar...</p>
        ) : (
          <Products products={products.data} categories={categories.data} />
        )}
      </div>
    </div>
  );
};

export default Root;
