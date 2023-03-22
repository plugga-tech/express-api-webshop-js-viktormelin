import { Router } from 'express';
import protect from '../middlewares/auth.middleware';
import { createCategory, getCategories } from '../controllers/category.controller';

const categoryRouter = Router();

categoryRouter.get('/', getCategories);
categoryRouter.post('/add', protect, createCategory);

export default categoryRouter;
