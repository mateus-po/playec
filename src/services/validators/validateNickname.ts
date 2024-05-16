const validateNickname = (nickname: string) => {
    return /^[0-9a-zA-Z_-]*$/.test(nickname);
};

export default validateNickname;
