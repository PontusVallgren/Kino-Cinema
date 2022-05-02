import { makeStyles } from "tss-react/mui";
const contactStyle = makeStyles()((theme) => ({
  wrapper: {
    fontFamily: "Open sans",
    paddingTop: "8em",
    paddingBottom: "10em",
  },

  bigBox: {
    backgroundColor: "rgba(0, 0, 0, 0.37)",
    borderRadius: "20px",
    fontFamily: "Open sans",
    fontSize: "1em",
    width: "700px",
    margin: "0 auto",
    padding: "20px 0 20px 0px",
  },
  smallBox: {
    backgroundColor: "white",
    fontFamily: "Open sans",
    paddingBottom: "8em",
  },

  statensmedie: {
    color: "black",
    "&:hover": {
      color: "rgb(4, 251, 243)",
    },
    fontFamily: "Open sans",
  },

  title: {
    fontFamily: "Open sans",
    marginTop: "0.1em",
    marginBottom: "1em",
  },
  title2: {
    fontFamily: "Open sans",
    marginTop: "3em",
    marginBottom: "1em",
  },
  rightField: {
    fontFamily: "Open sans",
    fontSize: "13px",
    marginLeft: "25em",
    marginTop: "-9em",
  },
  ages: {
    fontFamily: "Open sans",
    padding: "1em",
  },
  title0: {
    color: "#ffff",
    marginLeft: "-25em",
    fontFamily: "Open sans",
    textAlign: "center",
  },
  maplink: {
    color: "black",
    "&:hover": {
      color: "rgb(4, 251, 243)",
    },
    fontFamily: "Open sans",
    fontSize: "18px",
    marginBottom: "2rem",
  },
}));

export default contactStyle;
