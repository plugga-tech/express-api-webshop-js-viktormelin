import { useEffect, useState } from 'react';
import { User } from '../types/typings';
import axios from 'axios';
import { Router, useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:3000/api/users';

const useUser = () => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    const response = await axios.post<User>(`${API_URL}/login`, { email, password });

    if (response.status === 200) {
      localStorage.setItem('user', JSON.stringify(response.data));
      setUser(response.data);

      return user;
    }
  };

  const register = async (name: string, email: string, password: string) => {
    const response = await axios.post<User>(`${API_URL}/add`, { name, email, password });

    if (response.status === 201) {
      localStorage.setItem('user', JSON.stringify(response.data));
      setUser(response.data);

      return user;
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);

    return user;
  };

  useEffect(() => {
    const storage = localStorage.getItem('user');

    if (storage) {
      setUser(JSON.parse(storage));
    }
  }, []);

  return { user, login, register, logout };
};

export default useUser;
