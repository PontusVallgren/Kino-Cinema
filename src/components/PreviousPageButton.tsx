import {NextPage} from "next"
import {useRouter} from "next/router"
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';


const PreviousPageButton: NextPage = () => {
    const router = useRouter();
    return (
        <>
            <ArrowCircleLeftRoundedIcon fontSize="large" sx={{
                padding: "0.3em",
                color: "#4178E2"
            }} onClick={() => router.back()}></ArrowCircleLeftRoundedIcon>
        </>
    )
}

export default PreviousPageButton