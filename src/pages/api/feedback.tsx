import { NextApiRequest, NextApiResponse } from "next";

type formfeed = {
  name: string;
  email: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<formfeed>
) {
  try {
    res.status(200).json({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
  } catch (err) {
    res.status(500);
  }
}
