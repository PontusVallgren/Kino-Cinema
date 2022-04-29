import React from "react";
import Image from "next/Image";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

type DetailsPageHeroProps = {
  banner: string;
  toggleTrailer: () => void;
};

const DetailPageHero: React.FC<DetailsPageHeroProps> = ({
  banner,
  toggleTrailer,
}) => {
  return (
    <div style={{ position: "relative" }}>
      <Image
        src={banner}
        layout='responsive'
        width={100}
        height={26}
        alt={`Movie banner`}
        objectFit='cover'
        objectPosition='center top'
        priority
      />
      <PlayCircleIcon
        onClick={toggleTrailer}
        sx={{
          position: "absolute",
          color: "white",
          top: "40%",
          left: "45%",
          fontSize: "5em",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default DetailPageHero;
