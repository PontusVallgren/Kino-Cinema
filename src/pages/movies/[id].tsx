import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import DetailPageHero from "../../components/DetailPageHero";
import MovieInformation from "../../components/MovieInformation";
import Trailer from "../../components/Trailer";
import { Movie } from "../../types";
import classes from "./index.module.css";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `http:localhost:3000/api/movies/${context.params!.id}`
  );
  const data = await res.json();

  return {
    props: {
      movie: data,
    },
  };
};

const MovieDetails: NextPage<{ movie: Movie }> = ({ movie }) => {
  const [showTrailer, setShowTrailer] = useState(false);

  const toggleTrailer = () => {
    setShowTrailer(!showTrailer);
  };
  return (
    <div className={classes.container}>
      <DetailPageHero
        toggleTrailer={toggleTrailer}
        banner={movie.backgroundImg}
      />
      {showTrailer && (
        <Trailer trailer={movie.trailer} toggleTrailer={toggleTrailer} />
      )}
      <MovieInformation movie={movie} />
    </div>
  );
};

export default MovieDetails;
