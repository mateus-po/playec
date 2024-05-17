import {
    UserError,
    createUserWithPasswordInput,
    logInUserWithPasswordInput,
    UserQuery,
} from '../../types/User.js';
import createUserWithPassword from '../../services/user/createUserWithPassword.js';
import logInUserWithPassword from '../../services/user/logInUserWithPassword.js';
import User from '../../models/User.js';

const userResolvers = {
    Query: {
        hello: () => 'Hello World!',
    },
    Mutation: {
        createUserWithPassword: async (
            _parent: any,
            { input }: { input: createUserWithPasswordInput }
        ): Promise<UserQuery | UserError> =>
            await createUserWithPassword(input),
        logInUserWithPassword: async (
            _parent: any,
            { input }: { input: logInUserWithPasswordInput }
        ): Promise<UserQuery | UserError> => await logInUserWithPassword(input),
    },
};

export default userResolvers;
