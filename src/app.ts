import express from 'express';
import connectDb from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 8080;

await connectDb();
const app = express();

app.get('/', (_req, res) => {
    res.send('working!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
