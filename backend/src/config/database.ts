import { connect } from 'mongoose';

const connectDatabase = async () => {
  try {
    const conn = await connect(process.env.MONGO_URI);
    console.log(`MongoDB connected on: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDatabase;
