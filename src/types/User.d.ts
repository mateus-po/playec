export type UserType = {
    email: string;
    nickname: string;
    description: string;
    admin: boolean;
};

export type createUserWithPasswordInput = {
    email: string;
    nickname: string;
    password: string;
};
