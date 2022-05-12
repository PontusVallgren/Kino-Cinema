import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { getData, saveModel } from '../../server/db';
import { userAccounts } from '../../server/models';

export default async function postAccount(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.userpassword, salt);
  const accounts = await getData(userAccounts);
  const isSameAccount = accounts.find(
    (account) => account.username === req.body.username
  );

  const userInfo = {
    username: req.body.username,
    userpassword: hash,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };

  if (!isSameAccount && userInfo) {
    const userAccount = new userAccounts(userInfo);
    await saveModel(userAccount);

    res.status(200).end();
  } else {
    res.status(401).end();
  }
}
