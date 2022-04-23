import { NextApiRequest, NextApiResponse } from "next";
import { userAccount } from "../../../db";

export default async function postAccount(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("whaaaat");
  const dummy = {
    userId: req.body.userId,
    userPassword: req.body.userPassword,
  };
  if (dummy) {
    console.log("yeahh");
    const yeah = new userAccount(dummy);
    yeah.save();
    res.status(200).end();
  } else {
    res.status(401).end();
  }
}
