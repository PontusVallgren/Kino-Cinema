import { NextApiRequest, NextApiResponse } from 'next';
import { getData } from '../../server/db';
import { userAccounts } from '../../server/models';

export default async function getUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == 'POST') {
    const username = req.body.username;
    const accounts = await getData(userAccounts);
    const data = accounts.find((user) => user.username == username);
    res.status(200).json({
      firstname: data.firstName,
      lastname: data.lastName,
    });
  }
  res.status(405).end();
}
