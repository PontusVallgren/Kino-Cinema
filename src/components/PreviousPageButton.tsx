import {NextPage} from "next"
import {useRouter} from "next/router"
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';


const PreviousPageButton: NextPage = () => {
    const router = useRouter();
    return (
        <>
            <ArrowCircleLeftRoundedIcon sx={{
                margin: "0.5em",
                color: "#ffff",
                fontSize: 40
            }} onClick={() => router.back()}></ArrowCircleLeftRoundedIcon>
        </>
    )
}

export default PreviousPageButton