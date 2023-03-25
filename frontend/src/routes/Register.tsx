import { useState } from 'react';
import useUser from '../hooks/useUser';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { register } = useUser();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const user = await register(name, email, password);
    if (user) {
      navigate('/admin');
    }
  };

  return (
    <div>
      <input type='text' placeholder='Name' onChange={(e) => setName(e.currentTarget.value)} />
      <input type='email' placeholder='Email' onChange={(e) => setEmail(e.currentTarget.value)} />
      <input type='password' placeholder='Password' onChange={(e) => setPassword(e.currentTarget.value)} />
      <button onClick={onClick}>Register</button>
    </div>
  );
};

export default Register;
