import { connect, connection, Document, Model } from 'mongoose';
import { userAccountProps } from '../types';

const url = "mongodb://localhost:27017/kino";

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

export const updateProfilePic = async (
  model: Model<ModelType>,
  username: string,
  profileImage: string
) => {
  await connect(url);
  const update = await model.findOneAndUpdate(
    { username },
    { profileImage },
    { new: true }
  );
  return update;
};
