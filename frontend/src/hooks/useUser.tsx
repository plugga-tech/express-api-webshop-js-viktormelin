import { useEffect, useState } from 'react';
import { User } from '../types/typings';
import axios, { AxiosError } from 'axios';
import { Router, useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { userAtomPersistance } from '../utils/store';

const API_URL = 'http://localhost:3000/api/users';

interface AxiosErrorData {
  data: {
    message: string;
  };
}

const useUser = () => {
  // const [user, setUser] = useState<User | null>(null);
  const [user, setUser] = useAtom(userAtomPersistance);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post<User>(`${API_URL}/login`, { email, password });

      if (response.status === 200) {
        localStorage.setItem('user', JSON.stringify(response.data));
        setUser(response.data);

        return response.data;
      }
    } catch (error) {
      const { response } = error as AxiosError;
      const { data } = response as AxiosErrorData;

      return data.message;
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
    setUser(null);

    return user;
  };

  const getUser = () => {
    if (user) {
      return JSON.parse(user) as User;
    }

    return null;
  };

  return { getUser, login, register, logout };
};

export default useUser;
