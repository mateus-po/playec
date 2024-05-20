import {
    UserError,
    createUserWithPasswordInput,
    logInUserWithPasswordInput,
    UserQuery,
} from '../../types/User.js';
import createUserWithPassword from '../../services/user/createUserWithPassword.js';
import logInUserWithPassword from '../../services/user/logInUserWithPassword.js';
import { Response } from 'express';
import { BaseContext } from '@apollo/server';

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
            { input }: { input: logInUserWithPasswordInput },
            context: any
        ): Promise<UserQuery | UserError> =>
            await logInUserWithPassword(input, context.res),
    },
};

export default userResolvers;
