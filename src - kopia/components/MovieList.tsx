import React from "react";
import MovieItem from "../components/MovieItem";
import classes from "./MovieList.module.css";
import { Movie } from "../types";

type MovieListProps = {
  movies: Movie[];
};

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <ul className={classes.moviesCtn}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
