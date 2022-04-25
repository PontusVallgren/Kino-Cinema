import { connect, connection, Document, Model } from "mongoose";
import { userAccountProps } from "../types";

const url = process.env.DB_URL;

if (!url) {
  throw Error(`DB_URL doesn't exist in .env.local`);
}
export const saveModel = async (model: Document<any>) => {
  await connect(url);
  await model.save();
  await connection.close();
};

export const getData = async (model: Model<any>) => {
  await connect(url);
  const result = await model.find();
  await connection.close();

  return result;
};

// export const getData = async (
//   model: Model<userAccountProps>
// ): Promise<userAccountProps[]> => {
//   await connect(url);
//   const result = await model.find();

//   await connection.close();

//   return result;
// };
