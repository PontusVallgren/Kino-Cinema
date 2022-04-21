import { FormGroup, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { NextPage } from "next";
import React, { FormEvent, useState } from "react";
import {
  CenterHorizon,
  CustomButton,
  CustomText,
} from "../../components/CustomMUI/CustomUI";
import classes from "./index.module.css";

const Login: NextPage = () => {
  const [isMember, setIsNewMember] = useState<boolean>(true);
  const [userName, setUserName] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        userPassword,
      }),
    });
    console.log(userName, userPassword, "ya");
  };

  return (
    <div className="main">
      {isMember ? (
        <>
          <Box className={classes.emptySpace}>
            <Box className={classes.loginForm}>
              <CustomText className={classes.loginTitle}>
                Välkommen till Risbäck
              </CustomText>
              <CenterHorizon component="form">
                <FormGroup aria-label="position">
                  <TextField
                    id="outlined-basic"
                    label="Username"
                    className={classes.userInput}
                    onChange={(e) => setUserName(e.target.value)}
                    color="info"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    type="password"
                    className={classes.userInput}
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                  <CustomButton
                    onClick={handleSubmit}
                    color="secondary"
                    variant="contained"
                    type="submit"
                    className={classes.loginBtn}
                  >
                    Log in
                  </CustomButton>
                </FormGroup>
              </CenterHorizon>
              <Box className={classes.notMember}>
                <CustomText>Not a member?</CustomText>
                <p>🍀</p>
                <CustomText
                  onClick={() => setIsNewMember(false)}
                  className={classes.signUp}
                >
                  Sign up
                </CustomText>
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        "no"
      )}
    </div>
  );
};

export default Login;
