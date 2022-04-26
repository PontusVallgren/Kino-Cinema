import {NextPage} from "next"

type TrailerProps = {
    trailer: string;
    toggleTrailer: () => void;
};

const Trailer: NextPage<TrailerProps> = ({trailer, toggleTrailer}) => {

    return (
        <div onClick={toggleTrailer} style={{position: "fixed", width: "100vw", height: "100vh", top: "0", bottom: "0", left: "0", right: "0", background: "rgba(0, 0, 0, 0.8)"}}>
        <iframe style={{position: "fixed", width: "80vw", height: "80vh", top: "10%", bottom: "0", left: "10%", right: "0"}}
            src={trailer}
            width="100%"
            height="250px"
            title="video"
            frameBorder="0"
            allowFullScreen
        ></iframe>
        </div>
    )
}

export default Trailer;