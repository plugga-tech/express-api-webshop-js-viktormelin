import React, { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.scss';
import '@fontsource/rubik';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import Login from './routes/Login';
import useUser from './hooks/useUser';
import Register from './routes/Register';
import CartContext from './utils/CartContext';
import useCart from './hooks/useCart';
import Orders from './routes/Orders';
import Cart from './routes/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/orders',
    element: <Orders />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
