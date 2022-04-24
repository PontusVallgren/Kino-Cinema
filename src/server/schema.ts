import { userAccountProps } from "../types";
import { Schema } from "mongoose";

export const userAccountSchema = new Schema<userAccountProps>({
  userId: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
});
