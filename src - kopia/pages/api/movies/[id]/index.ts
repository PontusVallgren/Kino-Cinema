import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose"
import {movies} from "../../../../server/models"

mongoose.connect(process.env.DB_URL!) 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const id = req.query.id
    const data = await movies.find();
    const movie = data.find(movie => movie.id === id)
    res.status(200).json(movie)
}