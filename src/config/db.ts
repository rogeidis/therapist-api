import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/miapp');
    console.log('MongoDB conectado');
  } catch (err) {
    console.error('Error al conectar a MongoDB', err);
    process.exit(1);
  }
};
