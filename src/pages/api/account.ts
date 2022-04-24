import { NextApiRequest, NextApiResponse } from "next";
import { saveModel } from "../server/db2";
import { userAccount } from "../server/models2";
export default async function postAccount(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dummy = {
    username: req.body.userId,
    userPassword: req.body.userPassword,
  };
  if (dummy) {
    const yeah = new userAccount(dummy);
    await saveModel(yeah);

    res.status(200).end();
  } else {
    res.status(401).end();
  }
}
