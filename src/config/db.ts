import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const url = process.env.MONGO_DB_PATH || 'mongodb://mongo:27017/playec-mongo';

const connectDb = async () => {
    await mongoose
        .connect(url)
        .then(() => {
            console.log('Successfully connected to MongoDB database');
        })
        .catch((error: Error) => {
            console.log(`Couldn't connect to database: ${error.message}`);
            throw Error;
        });
};

export default connectDb;
