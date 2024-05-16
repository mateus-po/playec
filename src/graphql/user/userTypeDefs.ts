const userTypeDefs = `#graphql
    type Query {
        hello: String
    }

    type Mutation {
        createUserWithPassword(input: CreateUserWithPasswordInput!): User!
    }

    type User {
        email: String!
        nickname: String!
        description: String!
        admin: Boolean!
    }

    input CreateUserWithPasswordInput {
        email: String!
        nickname: String!
        password: String!
    }
`;

export default userTypeDefs;
