import { FormGroup, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import classes from "../pages/login/index.module.css";
import {
  CenterHorizon,
  CustomButton,
  CustomText,
  PreviousPageBtn,
} from "./CustomMUI/CustomUI";
import PreviousPageButton from "./PreviousPageButton";

type signUpProp = {
  userClickedBack: (value: boolean) => void;
};
const SignUp: React.FC<signUpProp> = ({ userClickedBack }) => {
  const [userName, setUserName] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const handleSignUp = async () => {
    await fetch(`/api/account`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userName,
        userPassword: userPassword,
      }),
    });
  };
  return (
    <>
      <PreviousPageBtn onClick={() => userClickedBack(true)} />
      <Box className={classes.emptySpaceOfSignUp}>
        <Box className={classes.loginForm}>
          <CustomText className={classes.loginTitle}>Sign up</CustomText>
          <CenterHorizon component="form">
            <FormGroup aria-label="position">
              <TextField
                id="username"
                variant="outlined"
                label="Username"
                className={classes.userInput}
                onChange={(e) => setUserName(e.target.value)}
                color="info"
              />
              <TextField
                id="userPassword"
                label="Password"
                variant="outlined"
                type="password"
                className={classes.userInput}
                onChange={(e) => setUserPassword(e.target.value)}
              />
              <CustomButton
                onClick={handleSignUp}
                color="primary"
                variant="contained"
                type="submit"
                className={classes.loginBtn}
              >
                Create my account
              </CustomButton>
            </FormGroup>
          </CenterHorizon>
        </Box>
      </Box>
    </>
  );
};

export default SignUp;
