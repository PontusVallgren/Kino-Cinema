import {GetServerSideProps, NextPage} from "next"
import {Movie} from "../../types"



export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(`http://localhost:3000/api/movies/${context.params!.id}`)
    const data = await res.json()
    
    return {
        props: {
            movie: data
        }
    }
} 

const MovieDetails: NextPage<{movie: Movie}> = ({movie}) => {
    return (
        <h1>This is movie detail page for: {movie.title} with ID: {movie.id}</h1>
    )
}

export default MovieDetails