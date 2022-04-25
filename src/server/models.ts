import mongoose from "mongoose";
import { model } from "mongoose";
import { userAccountSchema } from "./schema";

const userAccount =
  mongoose.models.userAccount || model("userAccount", userAccountSchema);

  const movieSchema = new mongoose.Schema({
    id: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    regiActors: {type: String, required: true},
    genres: {type: Array, required: true},
    length: {type: String, required: true},
    age: {type: Number, required: true},
    rating: {type: Number, required: true},
    coverImg: {type: String, required: true},
    backgroundImg: {type: String, required: true},
    img1: {type: String, required: true},
    img2: {type: String, required: true},
    img3: {type: String, required: true},
    trailer: {type: String, required: true},
    date: {type: Array, required: true},
    time: {type: Array, required: true},
    seat: {type: Object, required: true},
    review: {type: Array, required: true},
})

const movies = mongoose.models.movies || mongoose.model("movies", movieSchema);

export { userAccount, movies };
