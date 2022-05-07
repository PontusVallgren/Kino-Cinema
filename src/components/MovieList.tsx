import React from "react";
import MovieItem from "../components/MovieItem";
import { Movie } from "../types";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

type MovieListProps = {
  movies: Movie[];
};

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <Container>
      <Grid container spacing={4} justifyContent='center'>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </Grid>
    </Container>
  );
};

export default MovieList;
