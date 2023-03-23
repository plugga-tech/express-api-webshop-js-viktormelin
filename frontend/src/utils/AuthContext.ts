import { createContext } from 'react';
import { User } from '../types/typings';

const AuthContext = createContext<{ user: User | null }>({ user: null });

export default AuthContext;
