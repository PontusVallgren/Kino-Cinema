import {NextApiRequest, NextApiResponse} from "next"
import movies from "../../../server/models"
import mongoose from "mongoose"
import {sortData} from "../../../server/utils/filter"



mongoose.connect(process.env.DB_URL!)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
        const data = await movies.find();
        const size = req.query.size as string || "9"
        const sort = req.query.sort as string

        const filteredData = sortData(data, sort, size)
        res.status(200).json(filteredData)

}