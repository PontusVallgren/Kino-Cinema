import { makeStyles } from "tss-react/mui";
const useMovieStyles = makeStyles()((theme) => ({
  selectBox: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 auto",
    padding: "1.2em",
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
  information: {
    width: "600px",
    color: "#ffff",
    padding: "5em",
  },
  titleDetails: {
    fontSize: "35px",
    margin: "0 0 0.3rem 0",
  },
  details: {
    display: "flex",
    alignItems: "center",
  },
  description: {
    margin: "1rem 0 0 0",
    fontSize: "20px",
    lineHeight: "1.3em",
  },
  toggleReview: {
    display: "flex",
    alignItems: "center",
    color: "#ffff",
    padding: "0 5em",
    margin: "0 0 2em 0",
  },

  reviewList: {
    display: "flex",
    maxWidth: "850px",
    flexDirection: "column",
    padding: "0 5em",
    margin: "1em 0 0 0",
  },

  reviewItem: {
    display: "flex",
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    color: "#fff",
    margin: "0 0 1em 0",
    padding: "1em",
    borderRadius: "10px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  },
}));

export default useMovieStyles;
