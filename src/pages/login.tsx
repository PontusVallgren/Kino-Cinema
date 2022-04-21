import {
  Box,
  FormControlLabel,
  Button,
  FormGroup,
  TextField,
} from "@mui/material";
import { NextPage } from "next";
import React, { FormEvent, useState } from "react";
import {
  CenterHorizon,
  CustomBtn,
  CustomButton,
  CustomText,
} from "../components/CustomMUI/CustomUI";
import classes from "../../styles/login.module.css";

const Login: NextPage = () => {
  const [isMember, setIsNewMember] = useState<boolean>(true);
  const [userName, setUserName] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(userName, 777);
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
              />
              {/* <CustomBtn
                btnText={"Log in"}
                btnPadding={"1px"}
                btnColor={"secondary"}
                onClick={(event) => handleSubmit(event)}
              /> */}
              <Button onClick={handleSubmit}>hehehe</Button>
            </FormGroup>
          </CenterHorizon>
          <CustomButton onClick={handleSubmit} variant="contained">
            hello
          </CustomButton>
        </>
      ) : (
        "no"
      )}
    </div>
  );
};

export default Login;
