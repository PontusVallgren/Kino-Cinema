import { FormGroup, TextField, Grow } from "@mui/material";
import { Box } from "@mui/system";
import React, { FormEvent, useState, useContext } from "react";
import { CenterHorizon, CustomText, CustomButton } from "../CustomMUI/CustomUI";
import { LoginProps } from "../../types";
import LoggedInModal from "./LoggedInModal";
import useLoginStyles from "../CustomMUI/loginStyle";
import { LoggedInContext } from "./IsLoggedIn";
import PasswordField from "./PasswordField";

const LoginForm: React.FC<LoginProps> = ({ newMember }) => {
  const [passwordWrong, setPasswordWrong] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const { changeLogInState } = useContext(LoggedInContext);

  const { classes } = useLoginStyles();

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
    if (res.status === 200) {
      setOpenModal(true);
      changeLogInState(true, userName);
    }
  };

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
              <PasswordField
                setUserPassword={(value) => {
                  setUserPassword(value);
                }}
                setPasswordWrong={(value) => {
                  setPasswordWrong(value);
                }}
              />
              <Box className={classes.emptyWarning}>
                {passwordWrong ? (
                  <Grow
                    in={true}
                    style={{ transformOrigin: "0 0 0" }}
                    {...{ timeout: 1000 }}
                  >
                    <CustomText
                      className={passwordWrong ? classes.warning : ""}
                    >
                      Ditt konto / lösenord är inte rätt
                    </CustomText>
                  </Grow>
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
      <LoggedInModal
        openModal={openModal}
        userName={userName}
        setOpenModal={setOpenModal}
      />
    </>
  );
};

export default LoginForm;
