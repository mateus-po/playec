import { UserType, createUserWithPasswordInput } from '../../types/User.js';
import User from '../../models/User.js';

const createUserWithPassword = async (
    input: createUserWithPasswordInput
): Promise<UserType> => {
    const user = await User.create({
        ...input,
        admin: false,
    });

    return {
        email: user.email,
        nickname: user.nickname,
        description: user.description,
        admin: user.admin,
    };
};

export default createUserWithPassword;
