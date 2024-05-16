import { UserType, createUserWithPasswordInput } from '../../types/User.js';
import createUserWithPassword from '../../services/user/createUserWithPassword.js';

const userResolvers = {
    Query: {
        hello: () => 'Hello World!',
    },
    Mutation: {
        createUserWithPassword: async (
            _parent: any,
            { input }: { input: createUserWithPasswordInput }
        ): Promise<UserType> => await createUserWithPassword(input),
    },
};

export default userResolvers;
