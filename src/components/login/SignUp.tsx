import {
  FormGroup,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import classes from "../../pages/login/index.module.css";

import {
  CenterHorizon,
  CustomButton,
  CustomText,
  PreviousPageBtn,
} from "../CustomMUI/CustomUI";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { visiblePasswordState } from "../../types";

type signUpProp = {
  userClickedBack: (value: boolean) => void;
};

const SignUp: React.FC<signUpProp> = ({ userClickedBack }) => {
  const [userName, setUserName] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const [values, setValues] = React.useState<visiblePasswordState>({
    password: "",
    showPassword: false,
  });
  const handleSignUp = async () => {
    await fetch(`/api/account`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userName,
        userpassword: userPassword,
        firstName: firstName,
        lastName: lastName,
      }),
    });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <PreviousPageBtn onClick={() => userClickedBack(true)} />
      <Box className={classes.emptySpaceOfSignUp}>
        <Box className={classes.loginForm}>
          <CustomText className={classes.loginTitle}>Registrera</CustomText>
          <CenterHorizon component="form">
            <FormGroup aria-label="position">
              <CustomText sx={{ marginLeft: "5px" }}>🔹Ditt konto</CustomText>
              <TextField
                id="username"
                variant="outlined"
                label="Användarnamn"
                className={classes.userInput}
                required
                onChange={(e) => setUserName(e.target.value)}
                color="info"
              />
              <TextField
                id="userPassword"
                label="Lösenord"
                variant="outlined"
                type={values.showPassword ? "text" : "password"}
                className={classes.userInput}
                required
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
                onChange={(e) => setUserPassword(e.target.value)}
              />
              <CustomText sx={{ margin: "5px 0 0 5px" }}>
                🔹Ditt namn
              </CustomText>
              <TextField
                id="firstName"
                variant="outlined"
                label="Förnamn"
                type="name"
                className={classes.userInput}
                required
                onChange={(e) => setFirstName(e.target.value)}
                color="info"
              />
              <TextField
                id="UserPassword"
                label="Efternamn"
                variant="outlined"
                type="name"
                className={classes.userInput}
                required
                onChange={(e) => setLastName(e.target.value)}
              />
              <CustomButton
                onClick={handleSignUp}
                color="primary"
                variant="contained"
                type="submit"
                className={classes.loginBtn}
              >
                Skapa mitt konto
              </CustomButton>
            </FormGroup>
          </CenterHorizon>
        </Box>
      </Box>
    </>
  );
};

export default SignUp;
