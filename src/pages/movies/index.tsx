import {NextPage, GetServerSideProps} from "next"
import MovieList from "../../components/MovieList"
import PreviousPageButton from "../../components/PreviousPageButton"
import FilterSelect from "../../components/FilterSelect"
import {Movie} from "../../types"
import classes from "./index.module.css"
import { useState } from "react"


export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(`http://localhost:3000/api/movies?sort=${context.query.sort}`)
    const data = await res.json()
    const limit = data.slice(0, 9) // Until fixed limit/sizing is fixed on api route

    return {
        props: {
            movies: limit
        }
    }
  } 

const Movies: NextPage<{movies: Movie[]}> = ({movies}) => {
    const [sort, setSort] = useState<string>("")

    const handleChange = (value: string) => {
        setSort(value)
    }
    return (
        <div className={classes.container}>
            <PreviousPageButton />
            <div>
            <h1 className={classes.title}>Filmer</h1>
            <FilterSelect handleChange={handleChange} value={sort}/>
            </div>
            <MovieList movies={movies} />
        </div>
    )
}

export default Movies