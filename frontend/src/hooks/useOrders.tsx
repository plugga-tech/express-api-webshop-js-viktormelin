import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { Cart } from '../types/typings';
import useUser from './useUser';

interface AxiosErrorData {
  data: {
    message: string;
  };
}

interface Products {
  productId: string;
  quantity: number;
}

interface Order {
  _id: string;
  user: string;
  products: Products[];
  createdAt: Date;
}

const useOrders = () => {
  const { getUser } = useUser();
  const user = getUser();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Order[]>();

  const createOrder = async (products: Products[]) => {
    if (user) {
      try {
        const response = await axios.post('http://localhost:3000/api/orders/add', {
          user: user._id,
          products,
        });

        if (response.status === 201) {
          return response.data;
        }
      } catch (error) {
        const { response } = error as AxiosError;
        const { data } = response as AxiosErrorData;

        return data.message;
      }
    } else {
      return null;
    }
  };

  if (user) {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.post<Order[]>('http://localhost:3000/api/orders/user', {
            user: user._id,
            token: user.token,
          });

          if (response.status === 200) {
            setData(response.data);
            setLoading(false);
          }
        } catch (error) {
          const { response } = error as AxiosError;
          const { data } = response as AxiosErrorData;

          console.log(response);

          return data.message;
        }
      };

      fetchData();
    }, []);
  }

  return { createOrder, loading, data };
};

export default useOrders;
