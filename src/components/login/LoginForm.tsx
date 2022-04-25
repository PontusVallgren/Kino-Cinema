import { FormGroup, Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { FormEvent, useState } from "react";
import classes from "../../pages/login/index.module.css";
import {
  CenterHorizon,
  CustomText,
  CustomButton,
  CenterBox,
} from "../CustomMUI/CustomUI";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Link from "next/link";

type LoginForm = {
  newMember: (value: boolean) => void;
};
const LoginForm: React.FC<LoginForm> = ({ newMember }) => {
  const [passwordWrong, setPasswordWrong] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        userPassword,
      }),
    });
    if (res.status === 401) setPasswordWrong(true);
    if (res.status === 200) setOpen(true);
  };
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: "150px",
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box className={classes.emptySpace}>
        <Box className={classes.loginForm}>
          <CustomText className={classes.loginTitle}>
            Välkommen till Risbäck
          </CustomText>
          <CenterHorizon component="form">
            <FormGroup aria-label="position">
              <TextField
                id="Username"
                variant="outlined"
                label="Användarenamn"
                className={classes.userInput}
                onChange={(e) => {
                  setUserName(e.target.value);
                  setPasswordWrong(false);
                }}
                color="info"
              />
              <TextField
                id="UserPassword"
                variant="outlined"
                label="Lösenord"
                type="password"
                className={classes.userInput}
                onChange={(e) => {
                  setUserPassword(e.target.value);
                  setPasswordWrong(false);
                }}
              />
              <Box className={classes.emptyWarning}>
                {passwordWrong ? (
                  <CustomText className={passwordWrong ? classes.warning : ""}>
                    Ditt konto / lösenord är inte rätt
                  </CustomText>
                ) : (
                  ""
                )}
              </Box>
              <CustomButton
                onClick={handleSubmit}
                color="secondary"
                variant="contained"
                type="submit"
                className={classes.loginBtn}
              >
                Logga in
              </CustomButton>
            </FormGroup>
          </CenterHorizon>
          <Box className={classes.notMember}>
            <CustomText>Inte medlem?</CustomText>
            <p>🍀</p>
            <CustomText
              onClick={() => newMember(false)}
              className={classes.signUp}
            >
              Registrera
            </CustomText>
          </Box>
        </Box>
      </Box>
      <Modal open={open} aria-labelledby="modal" aria-describedby="loggedin">
        <Box className={classes.loggedIn}>
          <Box className={classes.logAlarm}>
            <CheckCircleIcon
              className={classes.loggedInIcon}
              color="secondary"
            />
            <h1>{`Välkommen ${userName}!`}</h1>
            <h3>Nu är du loggad</h3>
            <Link href="/" passHref>
              <CustomButton
                color="primary"
                variant="contained"
                onClick={handleClose}
                className={classes.loggedInBtn}
              >
                Gå hem
              </CustomButton>
            </Link>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default LoginForm;
