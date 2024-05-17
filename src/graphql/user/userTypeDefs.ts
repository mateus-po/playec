const userTypeDefs = `#graphql
type Query {
    hello: String
}

type Mutation {
    createUserWithPassword(input: createUserWithPasswordInput!): UserResponse!
    logInUserWithPassword(input: logInUserWithPasswordInput!): UserResponse!
}

type UserResponse {
    user: User
    error: String
}

type User {
    email: String!
    nickname: String!
    description: String!
    admin: Boolean!
}

input createUserWithPasswordInput {
    email: String!
    nickname: String!
    password: String!
}

input logInUserWithPasswordInput {
    email: String
    nickname: String
    password: String!
}
`;

export default userTypeDefs;
