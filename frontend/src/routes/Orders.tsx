import { IconSettings, IconShoppingCart } from '@tabler/icons-react';
import { useContext, useEffect, useState } from 'react';
import { Product } from '../types/typings';
import useProducts from '../hooks/useProducts';
import Products from '../components/Products';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import useOrders from '../hooks/useOrders';
import useUser from '../hooks/useUser';
import { useAtomValue } from 'jotai';

const Orders = () => {
  const { loading, data } = useOrders();

  console.log(data);

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
      {loading || !data ? (
        <p>Ordrarna laddar...</p>
      ) : (
        <>
          {data.map((item) => (
            <div>
              <p>{item.name}</p>
              <p>{item.count}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Orders;
