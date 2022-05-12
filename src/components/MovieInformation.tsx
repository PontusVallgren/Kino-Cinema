import StarRateIcon from "@mui/icons-material/StarRate";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { DetailsInfo } from "../types";
import useMovieStyles from "./CustomMUI/movieStyles";
import { CustomText } from "./CustomMUI/CustomUI";
import { Box } from "@mui/material";

type MovieInformationProps = {
  movie: DetailsInfo;
};

const MovieInformation: React.FC<MovieInformationProps> = ({ movie }) => {
  const { classes } = useMovieStyles();
  return (
    <Box className={classes.information}>
      <CustomText className={classes.titleDetails}>{movie.title}</CustomText>
      <Box className={classes.details}>
        <StarRateIcon fontSize='inherit' />
        <CustomText>{`${movie.rating} |`}</CustomText>
        <CustomText>{`${movie.genres[0]} |`}</CustomText>
        <CustomText>{`${movie.age}+ |`}</CustomText>
        <AccessTimeFilledIcon fontSize='inherit' />
        <CustomText>{`${movie.length}`}</CustomText>
      </Box>
      <CustomText className={classes.description}>
        {movie.description}
      </CustomText>
    </Box>
  );
};

export default MovieInformation;
