import { userAccountProps } from '../types';
import { Schema } from 'mongoose';

export const userAccountSchema = new Schema<userAccountProps>({
  username: {
    type: String,
    required: true,
  },
  userpassword: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
  },
});
