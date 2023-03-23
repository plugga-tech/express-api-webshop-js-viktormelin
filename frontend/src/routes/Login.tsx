import { useState } from 'react';
import useUser from '../hooks/useUser';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useUser();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onClick = async () => {
    const user = await login(email, password);
    if (user) {
      navigate('/admin');
    }
  };

  return (
    <div>
      <input type='email' placeholder='Email' onChange={(e) => setEmail(e.currentTarget.value)} />
      <input type='password' placeholder='Password' onChange={(e) => setPassword(e.currentTarget.value)} />
      <button onClick={onClick}>Login</button>
    </div>
  );
};

export default Login;
