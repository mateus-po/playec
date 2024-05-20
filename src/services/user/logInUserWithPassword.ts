import {
    UserError,
    logInUserWithPasswordInput,
    UserQuery,
} from '../../types/User.js';
import User from '../../models/User.js';
import bcrypt from 'bcrypt';
import { Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const logInUserWithPassword = async (
    input: logInUserWithPasswordInput,
    res: Response
): Promise<UserQuery | UserError> => {
    const email = input.email;
    const nickname = input.nickname;
    const password = input.password;

    if (!email && !nickname)
        return { error: 'Either email or nickname must be provided' };

    const user = email
        ? await User.findOne({ email })
        : await User.findOne({ nickname });

    if (!user || !(await bcrypt.compare(password, user.password)))
        return { error: 'There is no user with provided credentials' };
    const secretString = process.env.JWT_SECRET_KEY || '';
    const token = jwt.sign({ id: user.id }, secretString);

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: true,
        maxAge: 8600,
        sameSite: true,
    });

    return { user };
};

export default logInUserWithPassword;
