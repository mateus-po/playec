import {
    UserError,
    logInUserWithPasswordInput,
    UserQuery,
} from '../../types/User.js';
import User from '../../models/User.js';
import bcrypt from 'bcrypt';

const logInUserWithPassword = async (
    input: logInUserWithPasswordInput
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

    return { user };
};

export default logInUserWithPassword;
