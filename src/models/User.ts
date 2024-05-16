import mongoose, { Schema, Document, Model } from 'mongoose';
import validator from 'validator';
import validateNickname from '../services/validators/validateNickname.js';
import { UserType } from '../types/User.js';

const { isEmail } = validator;

export interface UserInterface extends Document, UserType {}

type UserModel = Model<UserInterface, {}, {}>;

const UserSchema = new Schema<UserInterface, UserModel, {}>({
    email: {
        type: String,
        required: [true, 'E-mail address is required'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Given e-mail is invalid'],
        index: true,
    },
    nickname: {
        type: String,
        required: [true, 'Nickname is required'],
        unique: true,
        validate: [validateNickname, 'Given nickname is invalid'],
        index: true,
    },
    password: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
        maxLength: 800,
        default: '',
    },
    admin: {
        type: Boolean,
        required: true,
        default: false,
    },
});

var User = mongoose.model<UserInterface>('user', UserSchema);

export default User;
