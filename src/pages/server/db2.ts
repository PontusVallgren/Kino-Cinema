import { connect, connection } from "mongoose";
import { Document } from "mongoose";

const url = process.env.DB_URL;

if (!url) {
  throw Error(`DB_URL doesn't exist in .env.local`);
}
export const saveModel = async (model: Document<any>) => {
  await connect(url);

  await model.save();
  await connection.close();
};
