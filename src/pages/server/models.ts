import { model, models } from "mongoose";
import { userAccountSchema } from "./schema";

const userAccounts =
  models.userAccounts || model("userAccounts", userAccountSchema);

export { userAccounts };
