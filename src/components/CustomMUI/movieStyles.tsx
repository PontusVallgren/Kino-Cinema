import { makeStyles } from "tss-react/mui";
const useMovieStyles = makeStyles()((theme) => ({
  selectBox: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    margin: "0 auto",
  },
  thumbnail: {
    minWidth: "100%",
    borderRadius: "4px",
  },
  card: {
    background: "transparent",
    overflow: "hidden",
  },
  title: {
    fontSize: "36px",
    fontWeight: "700",
    textAlign: "center",
    margin: "0.5em 0 0 0",
    "&:hover": {
      color: "rgb(230, 230, 230)",
    },
  },
}));

export default useMovieStyles;
