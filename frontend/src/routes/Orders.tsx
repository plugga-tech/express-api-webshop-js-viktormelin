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
              <h3>{item._id}</h3>
              <table>
                <tr>
                  <th>Produkt ID</th>
                  <th>Antal</th>
                </tr>
                {item.products.map((product) => (
                  <tr>
                    <td>{product.productId}</td>
                    <td>{product.quantity}</td>
                  </tr>
                ))}
              </table>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Orders;
