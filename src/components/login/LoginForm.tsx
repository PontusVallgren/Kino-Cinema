import {
  FormGroup,
  Modal,
  TextField,
  Zoom,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { FormEvent, useState, useContext } from "react";
import classes from "../../pages/login/index.module.css";
import { CenterHorizon, CustomText, CustomButton } from "../CustomMUI/CustomUI";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Link from "next/link";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { visiblePasswordState } from "../../types";
import { LoggedInContext } from "./IsLoggedIn";

type LoginForm = {
  newMember: (value: boolean) => void;
};

const LoginForm: React.FC<LoginForm> = ({ newMember }) => {
  const [passwordWrong, setPasswordWrong] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [values, setValues] = useState<visiblePasswordState>({
    showPassword: false,
  });
  const { changeLogInState } = useContext(LoggedInContext);

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
    if (res.status === 200) setOpenModal(true);
  };
  const handleClickShowPassword = () => {
    setValues({
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleClose = () => setOpenModal(false);

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
                label="Användarnamn"
                className={classes.userInput}
                onChange={(e) => {
                  setUserName(e.target.value);
                  setPasswordWrong(false);
                }}
                required
                color="info"
              />
              <TextField
                id="UserPassword"
                variant="outlined"
                label="Lösenord"
                type={values.showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                className={classes.userInput}
                onChange={(e) => {
                  setUserPassword(e.target.value);
                  setPasswordWrong(false);
                }}
                required
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
      <Modal
        open={openModal}
        aria-labelledby="modal"
        aria-describedby="loggedin"
      >
        <Box className={classes.loggedIn}>
          <Box className={classes.logAlarm}>
            <Zoom in={true} style={{ transitionDelay: "320ms" }}>
              <CheckCircleIcon
                className={classes.loggedInIcon}
                color="secondary"
              />
            </Zoom>
            <h1>{`Välkommen ${userName}!`}</h1>
            <h3>Nu är du loggad</h3>
            <Link href="/" passHref>
              <CustomButton
                color="primary"
                variant="contained"
                onClick={() => {
                  handleClose();
                  changeLogInState();
                }}
                className={classes.loggedInBtn}
              >
                Till startsidan
              </CustomButton>
            </Link>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default LoginForm;
