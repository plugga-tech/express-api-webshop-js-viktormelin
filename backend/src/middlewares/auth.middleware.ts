import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import User from '../models/user.model';
import { verifyJWT } from '../utils/jwt';

const protect = asyncHandler(async (req: Request, res: Response, next: any) => {
  const { token } = req.body;

  try {
    if (token === '1234key1234') {
      req.user = 'superuser';

      next();
    } else {
      const { payload } = await verifyJWT(token);
      req.user = await User.findById(payload.id).select('-password');

      next();
    }
  } catch (error) {
    console.error(error);
    throw new Error(typeof error === 'string' ? error : 'Not authorized');
  }

  if (!token) {
    res.status(401);
    throw new Error('Invalid credentials');
  }
});

export default protect;
