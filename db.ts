import { Schema, connect, model } from "mongoose";

const url = process.env.DB_URL;

if (!url) {
  throw Error("ENC_KEY doesn't exist in .env.local");
} else {
  connect(url, (err) => {
    if (err) console.log(err);
    else console.log("mongdb is connected");
  });
}
