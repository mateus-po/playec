import {
    UserError,
    UserQuery,
    createUserWithPasswordInput,
} from '../../types/User.js';
import User from '../../models/User.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const createUserWithPassword = async (
    input: createUserWithPasswordInput
): Promise<UserQuery | UserError> => {
    const saltRounds = process.env.SALT_ROUNDS || '13';
    input.password = await bcrypt.hash(input.password, parseInt(saltRounds));

    try {
        const user = await User.create({
            ...input,
            admin: false,
        });
        return { user };
    } catch (error: any) {
        return { error: error.message };
    }
};

export default createUserWithPassword;
