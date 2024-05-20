import express from 'express';
import authController from '../controllers/authController.js';

const userRouter = express.Router();

userRouter.get('/login', authController.login);

export default userRouter;
