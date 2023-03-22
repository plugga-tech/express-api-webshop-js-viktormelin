import asyncHandler from 'express-async-handler';
import Category from '../models/category.model';

export const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find();

  if (!categories) {
    res.status(500);
    throw new Error('Failed to fetch categories from server');
  }

  res.status(200).json(categories);
});

export const createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(400);
    throw new Error('Missing required fields');
  }

  const createdCategory = await Category.create({
    name,
  });

  if (createdCategory) {
    res.status(201).json(createdCategory);
  } else {
    res.status(500);
    throw new Error('Failed to create new category');
  }
});
