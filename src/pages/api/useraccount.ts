import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { saveModel } from "../../server/db";
import { userAccounts } from "../../server/models";

export default async function postAccount(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.userpassword, salt);

  const userInfo = {
    username: req.body.username,
    userpassword: hash,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };

  if (userInfo) {
    const userAccount = new userAccounts(userInfo);
    await saveModel(userAccount);

    res.status(200).end();
  } else {
    res.status(401).end();
  }
}
