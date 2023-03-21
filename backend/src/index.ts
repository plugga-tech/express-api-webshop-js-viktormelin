import express from 'express';
import * as dotenv from 'dotenv';
import connectDatabase from './config/database';
import userRouter from './routes/user.routes';

const PORT = 3000;

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', userRouter);

app.listen(PORT, async () => {
  console.log(`Server started on port: ${PORT}`);
  await connectDatabase();
});
