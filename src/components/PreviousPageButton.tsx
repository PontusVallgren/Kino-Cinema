import {NextPage} from "next"
import {useRouter} from "next/router"
import { PreviousPageBtn } from "./CustomMUI.tsx/CustomUI";


const PreviousPageButton: NextPage = () => {
    const router = useRouter();
    return (
        <>
            <PreviousPageBtn onClick={() => router.back()}></PreviousPageBtn>
        </>
    )
}

export default PreviousPageButton