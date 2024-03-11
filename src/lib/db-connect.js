import mongoose from 'mongoose';

const connection = {};

const dbConnect = async () => {
  if (connection.isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URL);
    connection.isConnected = db.connections[0].readyState;
    console.log('Connected to MongoDB success');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

export default dbConnect;
