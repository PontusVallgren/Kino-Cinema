import { makeStyles } from "tss-react/mui";
const useLoginStyles = makeStyles()((theme) => ({
  userInput: {
    backgroundColor: "white",
    borderRadius: "8px",
    width: "500px",
    margin: "5px",
    border: "0 solid black",
  },
  loginTitle: {
    textAlign: "center",
    padding: "80px 0 20px 0",
    fontSize: "50px",
  },
  loginForm: {
    backgroundColor: "#0000005e",
    borderRadius: "20px",
    width: "700px",
    margin: "0 auto",
    padding: "100px 0 150px 0",
  },
  emptySpace: {
    padding: "120px 0 120px 0",
  },
  emptySpaceOfSignUp: {
    padding: "35px 0 250px 0",
  },
  loginBtn: {
    margin: "15px 5px 0 5px",
    padding: "10px",
  },
  notMember: {
    textAlign: "center",
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
  },
  signUp: {
    cursor: "pointer",
    color: "#90b2f3",
    textDcoration: "underline",
    marginLeft: "2px",
  },
  warning: {
    fontSize: "1.1rem",
    marginLeft: "5px",
    paddingBottom: "5px",
    color: "#f74848",
  },
  emptyWarning: {
    height: "1.2rem",
  },
  loggedIn: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "600px",
    padding: "100px 50px",
    backgroundColor: "aliceblue",
    borderRadius: "20px",
  },
  logAlarm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 auto",
    textAlign: "center",
    width: "400px",
  },
  loggedInBtn: {
    marginTop: "0.8rem",
    padding: "10px 25px",
  },
  loggedInIcon: {
    fontSize: "3.5rem",
    marginBottom: "0.2rem",
  },
}));

export default useLoginStyles;
