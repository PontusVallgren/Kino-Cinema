import Cookies from "cookies";
import Iron from "@hapi/iron";
import { NextApiRequest, NextApiResponse } from "next";

const USERS: Record<string, string> = {
  haeju: "potato",
};
const ENC_KEY = process.env.ENC_KEY;
console.log(process.env.ENC_KEY, "EYEYE");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    res.json(ENC_KEY);
    console.log(ENC_KEY, "yeyeye");
  }
}
