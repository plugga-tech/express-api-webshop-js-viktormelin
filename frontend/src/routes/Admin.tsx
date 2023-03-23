import { IconSettings, IconShoppingCart } from '@tabler/icons-react';
import { useContext, useState } from 'react';
import { Product } from '../types/typings';
import useProducts from '../hooks/useProducts';
import Products from '../components/Products';
import AuthContext from '../utils/AuthContext';
import Navbar from '../components/Navbar';

const Admin = () => {
  const { user } = useContext(AuthContext);

  if (user) {
    return (
      <div>
        <Navbar />
        <p>You are logged in {user.name}</p>
      </div>
    );
  } else {
    return <p>Not logged in</p>;
  }
};

export default Admin;
