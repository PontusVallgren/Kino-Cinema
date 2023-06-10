import { NextPage, GetServerSideProps } from "next";
import MovieList from "../components/MovieList";
import PreviousPageButton from "../components/PreviousPageButton";
import { Movie } from "../types";
import { useState } from "react";
import { useRouter } from "next/router";
import {
    CustomText,
} from "../components/CustomMUI/CustomUI";
import { movies } from "../server/models";
import { sortData } from "../server/utils/filter";
import {connect} from "mongoose";
import { Box, Container} from "@mui/material";
import useMovieStyles from "../components/CustomMUI/movieStyles";

export const getServerSideProps: GetServerSideProps = async (context) => {
    connect('mongodb://localhost:27017/kino');
    const res = await movies.find();
    const sort = context.query.sort as string;
    const size = (context.query.size as string) || "6";

    const filterData = sortData(res, sort, size);
    const data = JSON.parse(JSON.stringify(filterData));

    return {
        props: {
            movies: data,
        },
    };
};

const Home: NextPage<{ movies: Movie[] }> = ({ movies }) => {
    const { classes } = useMovieStyles();

    const [filter, setFilter] = useState({
        sort: "",
        size: 6,
    });
    const router = useRouter();

    const handleChange = (value: string) => {
        setFilter({
            sort: value,
            size: 6,
        });

        router.push({
            query: { sort: value, size: 6 },
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
        <Container
            sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            maxWidth={false}
            className='main'
        >
            <PreviousPageButton />
            <Box>
                <Box className={classes.selectBox}>
                    <CustomText variant='h3' gutterBottom>
                        Populära filmer just nu
                    </CustomText>
                </Box>
                <MovieList movies={movies} />
            </Box>
        </Container>
    );
};

export default Home;