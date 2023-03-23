import { IconLogout, IconSettings, IconShoppingCart } from '@tabler/icons-react';
import React, { useState } from 'react';
import { Product } from '../types/typings';
import { Link } from 'react-router-dom';
import useUser from '../hooks/useUser';

interface Props {
  showCart?: boolean;
  addToCart?: (product: Product) => void;
}

const Navbar = ({ showCart, addToCart }: Props) => {
  const { user, logout } = useUser();

  const [cart, setCart] = useState<Product[]>();

  return (
    <div className='nav'>
      <ul className='nav__navbar'>
        <li className='nav__navbar-item'>
          <Link to='/'>Produkter</Link>
        </li>
      </ul>
      <ul className='nav__settings'>
        {showCart ? (
          <Link to='/cart'>
            <li className='nav__settings-item'>
              <IconShoppingCart />
              {cart && cart.length > 0 ? <div className='cartIndicator'>{cart.length}</div> : null}
            </li>
          </Link>
        ) : null}
        <Link to='/admin'>
          <li className='nav__settings-item'>
            <IconSettings />
            Admin
          </li>
        </Link>
        {user ? (
          <li className='nav__settings-item' onClick={logout}>
            <IconLogout />
            Logga ut
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default Navbar;
