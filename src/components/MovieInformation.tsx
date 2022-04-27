import { Movie } from "../types";
import classes from "./MovieInformation.module.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

type MovieInformationProps = {
  movie: Movie;
};

const MovieInformation: React.FC<MovieInformationProps> = ({ movie }) => {
  return (
    <div className={classes.information}>
      <h1 className={classes.title}>{movie.title}</h1>
      <div className={classes.details}>
        <span>
          <StarRateIcon fontSize='inherit'></StarRateIcon>
          {`${movie.rating} |`}
        </span>
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

/* 




           <span
        className={classes.details}
      >{`*${movie.rating} | ${movie.genres[0]} | ${movie.age}+ | ${movie.length}`}</span>

*/
