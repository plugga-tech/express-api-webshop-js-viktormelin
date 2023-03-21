import { Router } from 'express';
import { createUser, getUser, getUsers, loginUser } from '../controllers/user.controller';

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.post('/', getUser);
userRouter.post('/login', loginUser);
userRouter.post('/add', createUser);

export default userRouter;
