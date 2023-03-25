import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Category } from '../types/typings';
import { Categories } from '../utils/store';

const useCategories = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Category[]>(Categories);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<Category[]>('http://localhost:3000/api/categories');

      if (response.status === 200) {
        setData(data.concat(response.data));
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

export default useCategories;
