import {GetStaticPaths, GetStaticProps, NextPage} from "next"
import {Data} from "../index"
import {Movie} from "../../../types"

/* 
export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`http://localhost:3000/api/movies`)
    const movies = await res.json()

    const ids = movies.map((movie: Movie) => movie.id)
    const paths = ids.map((id: string) => ({params: {id: id.toString()}}))
    
    return {
        paths,
        fallback: false
    }
}
*/

export const getStaticPaths: GetStaticPaths = async () => {
   const movies = Data;

    const ids = movies.map((movie: Movie) => movie.id)
    const paths = ids.map((id: string) => ({params: {id: id.toString()}}))
    
    return {
        paths,
        fallback: false
    }
}

/* export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch(`http://localhost:3000/api/movies/${context.params!.id}`)
    
    return {
        props: {
            movie: await res.json()
        }
    }
}  */

export const getStaticProps: GetStaticProps = async (context) => {
    const movie = Data.find(movie => movie.id == context.params!.id )
    return {
        props: {
            movie: movie
        }
    }
}



const MovieDetails: NextPage<{movie: Movie}> = ({movie}) => {
    return (
        <h1>This is movie detail page for: {movie.title} with ID: {movie.id}</h1>
    )
}

export default MovieDetails