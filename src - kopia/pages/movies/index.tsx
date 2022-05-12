import { NextPage, GetServerSideProps } from "next";
import MovieList from "../../components/MovieList";
import PreviousPageButton from "../../components/PreviousPageButton";
import FilterSelect from "../../components/FilterSelect";
import { Movie } from "../../types";
import classes from "./index.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  CenterHorizon,
  CustomButton,
} from "../../components/CustomMUI/CustomUI";
import { movies } from "../../server/models";
import { sortData } from "../../server/utils/filter";
import mongoose from "mongoose";

export const getServerSideProps: GetServerSideProps = async (context) => {
  mongoose.connect(process.env.DB_URL!);
  const res = await movies.find();
  const sort = context.query.sort as string;
  const size = (context.query.size as string) || "9";

  const filterData = sortData(res, sort, size);
  const data = JSON.parse(JSON.stringify(filterData));

  return {
    props: {
      movies: data,
    },
  };
};

const Movies: NextPage<{ movies: Movie[] }> = ({ movies }) => {
  const [filter, setFilter] = useState({
    sort: "",
    size: 9,
  });
  const router = useRouter();

  const handleChange = (value: string) => {
    setFilter({
      sort: value,
      size: 9,
    });

    router.push({
      query: { sort: value, size: 9 },
    });
  };

  const handleClick = () => {
    setFilter({
      ...filter,
      size: filter.size + 6,
    });

    router.push(
      {
        query: { sort: filter.sort, size: filter.size + 6 },
      },
      undefined,
      { scroll: false }
    );
  };

  return (
    <div className={classes.container}>
      <PreviousPageButton />
      <div className={classes.selectCtn}>
        <h1 className={classes.title}>Filmer</h1>
        <FilterSelect handleChange={handleChange} value={filter.sort} />
      </div>
      <MovieList movies={movies} />
      <CenterHorizon sx={{ mb: 3 }}>
        <CustomButton
          color='primary'
          variant='contained'
          sx={{ p: 2 }}
          onClick={handleClick}
        >
          Ladda fler filmer
        </CustomButton>
      </CenterHorizon>
    </div>
  );
};

export default Movies;
