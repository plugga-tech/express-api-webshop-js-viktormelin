import { IconSettings, IconShoppingCart } from '@tabler/icons-react';
import { useState } from 'react';
import { Product } from '../types/typings';
import useProducts from '../hooks/useProducts';
import Products from '../components/Products';
import Navbar from '../components/Navbar';

const Root = () => {
  const { loading, data } = useProducts();

  return (
    <div>
      <Navbar showCart={true} />
      <div>{loading ? <p>Produkterna laddar...</p> : <Products products={data} />}</div>
    </div>
  );
};

export default Root;
