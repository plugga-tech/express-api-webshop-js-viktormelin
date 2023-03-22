import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Product } from '../types/typings';

const useProducts = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<Product[]>('http://localhost:3000/api/products');

      if (response.status === 200) {
        setData(response.data);
        setLoading(false);
      } else {
        console.error(response.status, response.statusText);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, data };
};

export default useProducts;
