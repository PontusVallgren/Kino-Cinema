import Cookies from "cookies";
import Iron from "@hapi/iron";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { userAccounts } from "../../server/models";
import { getData } from "../../server/db";

export default async function handleUserInfo(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const { userName, userPassword } = req.body;

    const accounts = await getData(userAccounts);

    const userInfo = accounts.find((account) => account.username === userName);
    const rightPassword = userInfo
      ? await bcrypt.compare(userPassword, userInfo.userpassword)
      : undefined;

    if (rightPassword) {
      const cookies = new Cookies(req, res);
      const ENC_KEY = process.env.ENC_KEY || "default_key";

      cookies.set(
        "session",
        await Iron.seal(
          {
            username: userName,
            loggedIn: true,
          },
          ENC_KEY,
          Iron.defaults
        )
      );
      res.status(200).end();
    } else {
      res.status(401).end();
    }
  } else {
    res.status(405).end();
  }
}
