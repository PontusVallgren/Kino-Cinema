import {NextPage} from "next"
import MovieList from "../components/MovieList"



const data = [
    {
        title: "Pocahontas1",
        thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblockbuster.se%2Ffilmer%2Fpocahontas&psig=AOvVaw29IT2B291pjRW4xt2naAH2&ust=1650447040198000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKiP4r_on_cCFQAAAAAdAAAAABAD"
    },
    {
        title: "Pocahontas2",
        thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblockbuster.se%2Ffilmer%2Fpocahontas&psig=AOvVaw29IT2B291pjRW4xt2naAH2&ust=1650447040198000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKiP4r_on_cCFQAAAAAdAAAAABAD"
    },
    {
        title: "Pocahontas3",
        thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblockbuster.se%2Ffilmer%2Fpocahontas&psig=AOvVaw29IT2B291pjRW4xt2naAH2&ust=1650447040198000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKiP4r_on_cCFQAAAAAdAAAAABAD"
    },
    {
        title: "Pocahontas4",
        thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblockbuster.se%2Ffilmer%2Fpocahontas&psig=AOvVaw29IT2B291pjRW4xt2naAH2&ust=1650447040198000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKiP4r_on_cCFQAAAAAdAAAAABAD"
    },
    {
        title: "Pocahontas5",
        thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblockbuster.se%2Ffilmer%2Fpocahontas&psig=AOvVaw29IT2B291pjRW4xt2naAH2&ust=1650447040198000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKiP4r_on_cCFQAAAAAdAAAAABAD"
    },
    {
        title: "Pocahontas6",
        thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblockbuster.se%2Ffilmer%2Fpocahontas&psig=AOvVaw29IT2B291pjRW4xt2naAH2&ust=1650447040198000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKiP4r_on_cCFQAAAAAdAAAAABAD"
    },
]

const Movies: NextPage = () => {
    return (
        <>
            <MovieList movies={data} />
        </>
    )
}

export default Movies