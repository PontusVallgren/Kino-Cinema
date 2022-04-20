import { Box, FormControlLabel, FormGroup, TextField } from "@mui/material";
import { NextPage } from "next";
import React, { useState } from "react";
import {
  CenterHorizon,
  CustomBtn,
  CustomButton,
  CustomText,
} from "../components/CustomMUI/CustomUI";
import classes from "../../styles/login.module.css";

const Login: NextPage = () => {
  const [isMember, setIsNewMember] = useState<boolean>(true);

  return (
    <div className="main">
      {isMember ? (
        <>
          <CustomText className={classes.loginTitle}>
            Välkommen till Risbäck
          </CustomText>
          <CenterHorizon component="form">
            <FormGroup aria-label="position">
              <TextField
                id="outlined-basic"
                label="Username"
                className={classes.userInput}
                color="info"
              />
              <TextField
                id="outlined-basic"
                label="Username"
                className={classes.userInput}
              />
              <CustomBtn
                btnText={"Log in"}
                btnPadding={"20px"}
                btnColor={"secondary"}
              />
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
