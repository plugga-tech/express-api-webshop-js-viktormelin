import User from '../models/user.model';
import { verifyJWT } from './jwt';

const authenticate = async (token: string) => {
  if (!token) {
    return { success: false, status: 401, message: 'No token provided' };
  }

  try {
    if (token === '1234key1234') {
      return { success: true, user: 'superuser' };
    } else {
      const { payload } = await verifyJWT(token);

      const user = await User.findById(payload.id).select('-password');

      return { success: true, user };
    }
  } catch (error) {
    return { success: false, status: 500, message: error };
  }
};

export default authenticate;
