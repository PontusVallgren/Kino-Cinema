import { FormGroup, TextField } from "@mui/material";
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
          <CustomText className={classes.loginTitle}>
            Välkommen till Risbäck
          </CustomText>
          <CenterHorizon component="form" className={classes.loginForm}>
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
                className={classes.userInput}
                onChange={(e) => setUserPassword(e.target.value)}
              />
              <CustomButton
                onClick={handleSubmit}
                color="secondary"
                variant="contained"
                type="submit"
              >
                Log in
              </CustomButton>
            </FormGroup>
          </CenterHorizon>
        </>
      ) : (
        "no"
      )}
    </div>
  );
};

export default Login;
