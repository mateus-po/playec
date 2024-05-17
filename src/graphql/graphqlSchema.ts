import userTypeDefs from './user/userTypeDefs.js';
import userResolvers from './user/userResolvers.js';

const schema = {
    typeDefs: [userTypeDefs],
    resolvers: [userResolvers],
};

export default schema;
