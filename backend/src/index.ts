import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import connectDatabase from './config/database';
import userRouter from './routes/user.routes';
import errorHandler from './middlewares/error.middleware';
import productRouter from './routes/products.routes';
import categoryRouter from './routes/categories.routes';
import orderRouter from './routes/orders.routes';

const PORT = 3000;

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/orders', orderRouter);

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server started on port: ${PORT}`);
  await connectDatabase();
});
