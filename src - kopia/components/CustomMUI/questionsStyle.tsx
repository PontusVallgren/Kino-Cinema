import { makeStyles } from "tss-react/mui";
const questionsStyle = makeStyles()((theme) => ({
  list: {
    backgroundColor: "white",
    fontFamily: "Open sans",
    fontSize: "1px",
  },
  subheader: {
    color: "black",
    fontFamily: "Open sans",
    fontSize: "15px",
    fontWeight: "bold",
  },
  items: {
    fontFamily: "Open sans",
    fontWeight: "bold",
  },
  thanx: {
    color: "antiquewhite",
    height: "15em",
    fontFamily: "Open sans",
    marginLeft: "9em",
    padding: "2em",
    width: "100%",
  },
  homebtn: {
    color: "white",
    fontFamily: "Open sans",
    marginLeft: "45em",
    marginTop: "-35em",
  },
}));

export default questionsStyle;
