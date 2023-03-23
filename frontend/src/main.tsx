import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.scss';
import '@fontsource/rubik';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import AuthContext from './utils/AuthContext';
import Login from './routes/Login';
import Admin from './routes/Admin';
import useUser from './hooks/useUser';
import Register from './routes/Register';

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
    path: '/admin',
    element: <Admin />,
  },
]);

const App = () => {
  const { user } = useUser();
  return (
    <AuthContext.Provider value={{ user }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
