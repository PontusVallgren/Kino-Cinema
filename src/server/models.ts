import mongoose from "mongoose";
import { model } from "mongoose";
import { userAccountSchema } from "./schema";

const userAccount =
  mongoose.models.userAccount || model("userAccount", userAccountSchema);

export { userAccount };
