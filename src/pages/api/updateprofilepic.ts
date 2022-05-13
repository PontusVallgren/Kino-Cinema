import { NextApiRequest, NextApiResponse } from 'next';
import { userAccounts } from '../../server/models';
import { getData, updateProfilePic } from '../../server/db';

export default async function UpdateProfilePic(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, profileImage } = req.body;
  if (username && profileImage) {
    const accounts = await updateProfilePic(
      userAccounts,
      username,
      profileImage
    );
    res.status(200).json(accounts);
    res.end();
  } else {
    res.status(404).end();
  }
}
