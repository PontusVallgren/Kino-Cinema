import { Schema, connect, model } from "mongoose";
import { userAccountProps } from "./src/types";

const userAccountSchema = new Schema<userAccountProps>({
  userId: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
});

const userAccount = model("userAccount", userAccountSchema);

export { userAccount };
