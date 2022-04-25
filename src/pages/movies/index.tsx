import {NextPage, GetServerSideProps} from "next"
import MovieList from "../../components/MovieList"
import PreviousPageButton from "../../components/PreviousPageButton"
import FilterSelect from "../../components/FilterSelect"
import {Movie} from "../../types"
import classes from "./index.module.css"
import { useState } from "react"
import {useRouter} from "next/router"
import {CustomButton} from "../../components/CustomMUI/CustomUI"



export const getServerSideProps: GetServerSideProps = async (context) => {
    const sort = context.query.sort
    const size = context.query.size

    const filters = []
    if (sort) {
        filters.push(`sort=${sort}`)
    }
    if (size) { 
        filters.push(`size=${size}`)
    }
    const protocol = context.req.headers["x-forwarded-proto"] || "http";
    const baseUrl = context.req ? `${protocol}://${context.req.headers.host}` : "";
    const res = await fetch(`${baseUrl}/api/movies?${filters.join('&')}`)
    const data = await res.json()

    return {
        props: {
            movies: data
        }
    }
  } 

const Movies: NextPage<{movies: Movie[]}> = ({movies}) => {
    const [filter, setFilter] = useState({
        sort: "",
        size: 9
    })

    const router = useRouter()

    const handleChange = (value: string) => {
        setFilter({
            sort: value,
            size: 9,
        })

        router.push({
            query: {sort: value, size: 9}
        })
    }
  
    const handleClick = () => {
        setFilter({
            ...filter,
            size: filter.size + 6
        })

        router.push({
            query: {sort: filter.sort, size: filter.size + 6},
        }, undefined, { scroll: false })
    }

    return (
        <div className={classes.container}>
            <PreviousPageButton />
            <div className={classes.selectCtn}>
            <h1 className={classes.title}>Filmer</h1>
            <FilterSelect handleChange={handleChange} value={filter.sort}/>
            </div>
            <MovieList movies={movies} />
            <CustomButton className={classes.loadmoreBtn} onClick={handleClick}>Ladda fler filmer</CustomButton>
        </div>
    )
}

export default Movies;
