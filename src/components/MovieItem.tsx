import {NextPage} from "next"
import Link from "next/link"
import Image from "next/Image"
import classes from "./MovieItem.module.css"
import {Movie} from "../types"




type MovieItemProps = {
    movie: Movie 
}

const MovieItem: NextPage<MovieItemProps> = ({movie}) => {
    return (
        <li className={classes.movieItem}>
            {/* `/movies/:id` */}
            <Link href='/'>
                <a className={classes.link}>
                <Image src={movie.thumbnail} className={classes.thumbnail}  width={310}
      height={425} alt={`Picture of ${movie.title} cover`}></Image>
                <h3 className={classes.title}>{movie.title}</h3>
                </a>
            </Link>
        </li>

    )
}

export default MovieItem