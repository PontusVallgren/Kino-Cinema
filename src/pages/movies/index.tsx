import {NextPage, GetStaticProps} from "next"
import MovieList from "../../components/MovieList"
import PreviousPageButton from "../../components/PreviousPageButton"
import {Movie} from "../../types"
import classes from "./index.module.css"


//Hämtar data via API,

/* export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(`http://localhost:3000/api/movies`)
    const data = await res.json()
    
    return {
        props: {
            movies: data
        }
    }
  }  */

export const Data = [
    {
        id: "1",
        title: "Poch1",
        thumbnail: "https://i.imgur.com/hSTzwTj.jpg"
    },
    {
        id: "2",
        title: "Poch2",
        thumbnail: "https://i.imgur.com/hSTzwTj.jpg"
    },
    {
        id: "3",
        title: "Poch3",
        thumbnail: "https://i.imgur.com/hSTzwTj.jpg"
    },
    {
        id: "4",
        title: "Poch4",
        thumbnail: "https://i.imgur.com/hSTzwTj.jpg"
    },
    {
        id: "5",
        title: "Poch5",
        thumbnail: "https://i.imgur.com/hSTzwTj.jpg"
    },{
        id: "6",
        title: "Poch6",
        thumbnail: "https://i.imgur.com/hSTzwTj.jpg"
    }
    ,{
        id: "7",
        title: "Poch7",
        thumbnail: "https://i.imgur.com/hSTzwTj.jpg"
    },
    {
        id: "8",
        title: "Poch8",
        thumbnail: "https://i.imgur.com/hSTzwTj.jpg"
    },{
        id: "9",
        title: "Poch9",
        thumbnail: "https://i.imgur.com/hSTzwTj.jpg"
    }
    ,{
        id: "10",
        title: "Poch10",
        thumbnail: "https://i.imgur.com/hSTzwTj.jpg"
    }
]
/* const Movies: NextPage<{movies: Movie[]}> = ({movies}) => {
    return (
        <div>
            <PreviousPageButton />
            <h1 className={classes.title}>Filmer</h1>
            <MovieList movies={movies} />
        </div>
    )
} */

// Function with dummy data

const Movies: NextPage = () => {
    return (
        <div className={classes.container}>
            <PreviousPageButton />
            <h1 className={classes.title}>Filmer</h1>
            <MovieList movies={Data.slice(0, 9)} />
        </div>
    )
}

export default Movies