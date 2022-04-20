import {NextPage, GetStaticProps} from "next"
import MovieList from "../components/MovieList"
import PreviousPageButton from "../components/PreviousPageButton"
import {Movie} from "../types"
import classes from "../../styles/movies.module.css"


//Hämtar data via API, limiterat till 6st

/* export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(`http://localhost:3000/api/movies`)
    
    return {
        props: {
            movies: await res.json()
        }
    }
  }  */

const Data = [
    {
        id: 1,
        title: "Poch1",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmb7MM69YFcAvV-T7Mc6bceR73mFqmu1I9JwOMe3yJwL4N-Lsm"
    },
    {
        id: 2,
        title: "Poch2",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmb7MM69YFcAvV-T7Mc6bceR73mFqmu1I9JwOMe3yJwL4N-Lsm"
    },
    {
        id: 3,
        title: "Poch3",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmb7MM69YFcAvV-T7Mc6bceR73mFqmu1I9JwOMe3yJwL4N-Lsm"
    },
    {
        id: 4,
        title: "Poch4",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmb7MM69YFcAvV-T7Mc6bceR73mFqmu1I9JwOMe3yJwL4N-Lsm"
    },
    {
        id: 5,
        title: "Poch5",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmb7MM69YFcAvV-T7Mc6bceR73mFqmu1I9JwOMe3yJwL4N-Lsm"
    },{
        id: 6,
        title: "Poch6",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmb7MM69YFcAvV-T7Mc6bceR73mFqmu1I9JwOMe3yJwL4N-Lsm"
    }
    ,{
        id: 7,
        title: "Poch7",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmb7MM69YFcAvV-T7Mc6bceR73mFqmu1I9JwOMe3yJwL4N-Lsm"
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
            <MovieList movies={Data.slice(0, 6)} />
        </div>
    )
}

export default Movies