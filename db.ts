import { Schema, connect, model } from "mongoose";
import { userAccountProps } from "./src/types";

const url = `mongodb+srv://haeju:XYxyCkzVK1bDIqis@cluster0.dx8jk.mongodb.net/risbackCinema?retryWrites=true&w=majority`;

connect(url, (err) => {
  if (err) console.log(err);
  else console.log("mongdb is connected");
});

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
