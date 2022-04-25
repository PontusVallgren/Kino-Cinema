import { GetServerSideProps, NextPage } from "next";
import { Data } from "./index";
import { Movie } from "../../types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const movie = Data.find((movie) => movie.id == context.params!.id);
  return {
    props: {
      movie: movie,
    },
  };
};

const MovieDetails: NextPage<{ movie: Movie }> = ({ movie }) => {
  return (
    <h1>
      This is movie detail page for: {movie.title} with ID: {movie.id}
    </h1>
  );
};

export default MovieDetails;
