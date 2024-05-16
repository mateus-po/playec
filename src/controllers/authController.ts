import { Request, Response } from 'express';
import User, { UserInterface } from '../models/User.js';

const AuthController = {
    async login(req: Request, res: Response) {
        res.render('auth/login');
    },
};

export default AuthController;
