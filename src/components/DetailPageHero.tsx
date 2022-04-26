import {NextPage} from "next"
import Image from "next/Image"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';


type DetailsPageHeroProps = {
    banner: string;
    toggleTrailer: () => void; 
};

const DetailPageHero: NextPage<DetailsPageHeroProps> = ({banner, toggleTrailer}) => {
    return (
        <div style={{position: "relative"}}>
        <Image src={banner} priority={true} layout="responsive" width={100} height={30} alt={`Movie banner`} />
        <PlayCircleIcon onClick={toggleTrailer} sx={{position: "absolute",
        color: "white",
        top: "45%",
        left: "47%",
        fontSize: "5em",
        cursor: "pointer"
    }}/>
    </div>
    )
}

export default DetailPageHero;