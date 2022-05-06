import { NextApiRequest, NextApiResponse } from "next";
import { movies } from "../../../../server/models";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const id = req.query.id;
    const preview = await movies.findOneAndUpdate(
      { id: id },
      {
        $push: {
          review: {
            username: req.body.username,
            rating: req.body.rating,
            comment: req.body.comment,
          },
        },
      }
    );

    res.status(200).json("Success");
  } else {
    res.status(404);
  }
}

/* 
Hitta film collection med rätt id

*/
