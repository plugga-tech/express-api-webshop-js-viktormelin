import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { Cart } from '../types/typings';
import useUser from './useUser';

interface AxiosErrorData {
  data: {
    message: string;
  };
}

const useOrders = () => {
  const { getUser } = useUser();
  const user = getUser();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Cart[]>();

  if (user) {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.post<Cart[]>('http://localhost:3000/api/orders/user', {
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

  return { loading, data };
};

export default useOrders;
