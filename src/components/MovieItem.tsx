import React from "react";
import Link from "next/link";
import Image from "next/Image";
import { Movie } from "../types";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { CustomText } from "./CustomMUI/CustomUI";
import useMovieStyles from "./CustomMUI/movieStyles";

type MovieItemProps = {
  movie: Movie;
};

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  const { classes } = useMovieStyles();
  return (
    <Grid item xs={8} md={6} lg={4} xl={3}>
      <Paper elevation={0} className={classes.card}>
        <Link href={`/movies/${movie.id}`}>
          <a>
            <Image
              src={movie.coverImg}
              className={classes.thumbnail}
              layout='responsive'
              width={310}
              height={425}
              alt={`Picture of ${movie.title} cover`}
            ></Image>
            <CustomText className={classes.title}>{movie.title}</CustomText>
          </a>
        </Link>
      </Paper>
    </Grid>
  );
};

export default MovieItem;
