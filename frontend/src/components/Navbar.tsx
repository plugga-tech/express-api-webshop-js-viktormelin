import { IconFile, IconList, IconLogout, IconSettings, IconShoppingCart } from '@tabler/icons-react';
import React, { useState } from 'react';
import { Product } from '../types/typings';
import { Link } from 'react-router-dom';
import useUser from '../hooks/useUser';
import useCart from '../hooks/useCart';

interface Props {
  showCart?: boolean;
}

const Navbar = ({ showCart }: Props) => {
  const { getUser, logout } = useUser();
  const user = getUser();

  const { cart } = useCart();

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
        <Link to='/orders'>
          <li className='nav__settings-item'>
            <IconFile />
            Ordrar
          </li>
        </Link>
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
