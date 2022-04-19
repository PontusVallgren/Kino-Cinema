import {NextPage} from "next"
import MovieItem from "../components/MovieItem"
import classes from "./MovieList.module.css"

type Movie = {
    title: string,
    thumbnail: string
} 

type MovieListProps = {
    movies: Movie[]
}

const MovieList: NextPage<MovieListProps> = ({movies}) => {
    return (
        <ul className={classes.moviesCtn}>
            {movies.map((movie) => <MovieItem key={movie.title} movie={movie} />)}    
        </ul>
    )
}

export default MovieList