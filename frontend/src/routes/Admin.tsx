import { IconSettings, IconShoppingCart } from '@tabler/icons-react';
import { useContext, useEffect, useState } from 'react';
import { Product } from '../types/typings';
import useProducts from '../hooks/useProducts';
import Products from '../components/Products';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import useUser from '../hooks/useUser';

const Admin = () => {
  const { getUser } = useUser();
  const user = getUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, []);

  return (
    <div>
      <Navbar />
      <p>You are logged in {user?.name}</p>
    </div>
  );
};

export default Admin;
