import { connect, connection, Document, Model } from "mongoose";
import { userAccountProps } from "../types";

const url = process.env.DB_URL;

if (!url) {
  throw Error(`DB_URL doesn't exist in .env.local`);
}
type ModelType = userAccountProps;
export const saveModel = async (model: Document<ModelType>) => {
  await connect(url);
  await model.save();
  await connection.close();
};

export const getData = async (model: Model<ModelType>) => {
  await connect(url);
  const result = await model.find();

  return result;
};
