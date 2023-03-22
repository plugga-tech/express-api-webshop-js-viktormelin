import { Router } from 'express';
import protect from '../middlewares/auth.middleware';
import { createCategory } from '../controllers/category.controller';

const categoryRouter = Router();

categoryRouter.post('/add', protect, createCategory);

export default categoryRouter;
