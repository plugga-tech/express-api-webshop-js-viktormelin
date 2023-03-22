import { IconSettings, IconShoppingCart } from '@tabler/icons-react';
import { useState } from 'react';
import { Product } from '../types/typings';
import useProducts from '../hooks/useProducts';
import Products from '../components/Products';

const Root = () => {
  const { loading, data } = useProducts();
  const [cart, setCart] = useState<Product[]>();

  return (
    <div>
      <div className='nav'>
        <ul className='nav__navbar'>
          <li className='nav__navbar-item'>Produkter</li>
        </ul>
        <ul className='nav__settings'>
          <li className='nav__settings-item'>
            <IconShoppingCart />
            {cart && cart.length > 0 ? <div className='cartIndicator'>{cart.length}</div> : null}
          </li>
          <li className='nav__settings-item'>
            <IconSettings />
          </li>
        </ul>
      </div>
      <div>{loading ? <p>Produkterna laddar...</p> : <Products products={data} />}</div>
    </div>
  );
};

export default Root;
