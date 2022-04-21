import Cookies from "cookies";
import Iron from "@hapi/iron";
import { NextApiRequest, NextApiResponse } from "next";

const USERS: Record<string, string> = {
  haeju: "potato",
  johan: "what are you looking at",
};
export default async function handleUserInfo(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const { userName, userPassword } = req.body;

    if (USERS[userName] && USERS[userName] == userPassword) {
      const cookies = new Cookies(req, res);

      if (!process.env.ENC_KEY) {
        throw Error("ENC_KEY doesn't exist in .env.local");
      }

      const ENC_KEY = process.env.ENC_KEY;
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
