import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import DetailPageHero from "../../components/DetailPageHero";
import MovieInformation from "../../components/MovieInformation";
import Trailer from "../../components/Trailer";
import { movies } from "../../server/models";
import { DetailsInfo } from "../../types";
import classes from "./index.module.css";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params!.id;
  const data = await movies.find();
  const movie = data.find((movie) => movie.id === id);

  return {
    props: {
      backgroundImg: movie.backgroundImg,
      trailer: movie.trailer,
      details: {
        title: movie.title,
        rating: movie.rating,
        genres: movie.genres,
        age: movie.age,
        length: movie.length,
        description: movie.description,
      },
    },
  };
};

type MovieDetailsProps = {
  backgroundImg: string;
  trailer: string;
  details: DetailsInfo;
};

const MovieDetails: NextPage<MovieDetailsProps> = ({
  backgroundImg,
  trailer,
  details,
}) => {
  const [showTrailer, setShowTrailer] = useState(false);

  const toggleTrailer = () => {
    setShowTrailer(!showTrailer);
  };
  return (
    <div className={classes.container}>
      <DetailPageHero toggleTrailer={toggleTrailer} banner={backgroundImg} />
      {showTrailer && (
        <Trailer trailer={trailer} toggleTrailer={toggleTrailer} />
      )}
      <MovieInformation movie={details} />
    </div>
  );
};

export default MovieDetails;
