import { useState } from 'react';
import useUser from '../hooks/useUser';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useUser();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const user = await login(email, password);

    if (user && typeof user !== 'string') {
      navigate('/admin');
    } else if (typeof user === 'string') {
      setError(user);
    }
  };

  return (
    <div>
      <input type='email' placeholder='Email' onChange={(e) => setEmail(e.currentTarget.value)} />
      <input type='password' placeholder='Password' onChange={(e) => setPassword(e.currentTarget.value)} />
      <button onClick={onClick}>Login</button>
      <p>{error}</p>
      <Link to='/register'>Ny användare? Registrera konto</Link>
    </div>
  );
};

export default Login;
