import { Box } from "@mui/material";
import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import DetailPageHero from "../../components/DetailPageHero";
import MovieInformation from "../../components/MovieInformation";
import Reviews from "../../components/Reviews";
import Trailer from "../../components/Trailer";
import { movies } from "../../server/models";
import { DetailsInfo } from "../../types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params!.id;
  const data = await movies.find();
  const movie = data.find((movie) => movie.id === id);

  return {
    props: {
      id: movie.id,
      backgroundImg: movie.backgroundImg,
      trailer: movie.trailer,
      reviews: movie.review,
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
  id: string;
  backgroundImg: string;
  trailer: string;
  reviews: [];
  details: DetailsInfo;
};

const MovieDetails: NextPage<MovieDetailsProps> = ({
  id,
  backgroundImg,
  trailer,
  reviews,
  details,
}) => {
  const [showTrailer, setShowTrailer] = useState(false);

  const toggleTrailer = () => {
    setShowTrailer(!showTrailer);
  };

  return (
    <Box className='main'>
      <DetailPageHero toggleTrailer={toggleTrailer} banner={backgroundImg} />
      {showTrailer && (
        <Trailer trailer={trailer} toggleTrailer={toggleTrailer} />
      )}
      <MovieInformation movie={details} />
      <Reviews reviews={reviews} id={id} />
    </Box>
  );
};

export default MovieDetails;
