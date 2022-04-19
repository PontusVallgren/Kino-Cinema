import {NextPage} from "next"
import Link from "next/link"
import classes from "./MovieItem.module.css"


type Movie = {
    title: string,
    thumbnail: string
} 

type MovieItemProps = {
    movie: Movie 
}

const MovieItem: NextPage<MovieItemProps> = ({movie}) => {
    return (
        <li className={classes.movieItem}>
            <Link href={`http://localhost:3000/`}>
                <a className={classes.link}>
                <img src={movie.thumbnail}></img>
                <h3 className={classes.title}>{movie.title}</h3>
                </a>
            </Link>
        </li>

    )
}

export default MovieItem