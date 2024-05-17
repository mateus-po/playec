export type UserType = {
    email: string;
    nickname: string;
    description: string;
    admin: boolean;
};

export type UserQuery = {
    user: UserType;
};

export type UserError = {
    error: string;
};

export type createUserWithPasswordInput = {
    email: string;
    nickname: string;
    password: string;
};

export type logInUserWithPasswordInput = {
    email: string?;
    nickname: string?;
    password: string;
};
