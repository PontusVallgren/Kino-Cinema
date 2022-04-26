import {GetServerSideProps, NextPage} from "next"
import { useState } from "react";
import DetailPageHero from "../../components/DetailPageHero";
import Trailer from "../../components/Trailer";
import {Movie} from "../../types"
import classes from "./index.module.css"



export const getServerSideProps: GetServerSideProps = async (context) => {
    const protocol = context.req.headers["x-forwarded-proto"] || "http";
    const baseUrl = context.req ? `${protocol}://${context.req.headers.host}` : "";
    const res = await fetch(`${baseUrl}/api/movies/${context.params!.id}`)
    const data = await res.json()
    
    return {
        props: {
            movie: data
        }
    }
} 

const MovieDetails: NextPage<{movie: Movie}> = ({movie}) => {
    const [showTrailer, setShowTrailer] = useState(false)

    const toggleTrailer = () => {
        setShowTrailer(!showTrailer)
    }
    return (
        <div className={classes.container}>
        <DetailPageHero toggleTrailer={toggleTrailer} banner={movie.backgroundImg}/>
        {showTrailer && <Trailer trailer={movie.trailer} toggleTrailer={toggleTrailer} />}
        <h1>This is movie detail page for: {movie.title} with ID: {movie.id}</h1>
        </div>
    )
}

export default MovieDetails