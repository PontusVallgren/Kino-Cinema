import classes from "./MovieInformation.module.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { DetailsInfo } from "../types";

type MovieInformationProps = {
  movie: DetailsInfo;
};

const MovieInformation: React.FC<MovieInformationProps> = ({ movie }) => {
  return (
    <div className={classes.information}>
      <h1 className={classes.title}>{movie.title}</h1>
      <div className={classes.details}>
        <StarRateIcon fontSize='inherit'></StarRateIcon>
        <span>{`${movie.rating} |`}</span>
        <span>{`${movie.genres[0]} |`}</span>
        <span>{`${movie.age}+ |`}</span>
        <AccessTimeFilledIcon fontSize='inherit'></AccessTimeFilledIcon>
        <span>{`${movie.length}`}</span>
      </div>
      <p className={classes.description}>{movie.description}</p>
    </div>
  );
};

export default MovieInformation;
