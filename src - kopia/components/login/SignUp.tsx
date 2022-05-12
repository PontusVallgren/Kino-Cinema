import { FormGroup, Grow, InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { FormEvent, useState } from "react";

import {
  CenterHorizon,
  CustomButton,
  CustomText,
  PreviousPageBtn,
} from "../CustomMUI/CustomUI";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import useLoginStyles from "../CustomMUI/loginStyle";
import PasswordField from "./PasswordField";

type signUpProp = {
  goBack: (value: boolean) => void;
};

const SignUp: React.FC<signUpProp> = ({ goBack }) => {
  const [userName, setUserName] = useState<string>("");
  const [strongPassword, setStrongPassword] = useState<boolean>(true);
  const [usernameExists, setUsernameExists] = useState<boolean>(false);
  const [userPassword, setUserPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const { classes } = useLoginStyles();

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();
    if (strongPassword) {
      const res = await fetch(`/api/useraccount`, {
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
      if (res.status === 200) {
        goBack(true);
      } else {
        setUsernameExists(true);
      }
    }
  };

  const userInputField = [
    { id: "firstName", label: "Förnamn", onChange: setFirstName },
    { id: "lastName", label: "Efternamn", onChange: setLastName },
  ];

  return (
    <>
      <PreviousPageBtn onClick={() => goBack(true)} />
      <Box className={classes.emptySpaceOfSignUp}>
        <Box className={classes.loginForm}>
          <CustomText className={classes.loginTitle}>Registrera</CustomText>
          <CenterHorizon component="form" onSubmit={(e) => handleSignUp(e)}>
            <FormGroup aria-label="position">
              <CustomText sx={{ marginLeft: "5px" }}>🔹Ditt konto</CustomText>
              <TextField
                id="username"
                variant="outlined"
                label="Användarnamn"
                className={classes.userInput}
                required
                onChange={(e) => setUserName(e.target.value)}
                onFocus={() => (usernameExists ? setUsernameExists(false) : "")}
                color="info"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {usernameExists ? (
                        <DoNotDisturbAltIcon color="error" />
                      ) : (
                        ""
                      )}
                    </InputAdornment>
                  ),
                }}
              />

              <PasswordField
                setUserPassword={(value: string) => {
                  setUserPassword(value);
                }}
                setStrongPassword={(value: boolean) => {
                  setStrongPassword(value);
                }}
              />
              <Box className={classes.emptyWarning}>
                {!strongPassword && (
                  <Grow
                    in={true}
                    style={{ transformOrigin: "0 0 0" }}
                    {...{ timeout: 1000 }}
                  >
                    <CustomText
                      className={strongPassword ? "" : classes.warning}
                      sx={{ fontSize: "14px" }}
                    >
                      Lösenord : mer än 8 bokstavär + nummer + stor bokstav
                    </CustomText>
                  </Grow>
                )}
              </Box>
              <CustomText sx={{ margin: "10px 0 0 5px" }}>
                🔹Ditt namn
              </CustomText>

              {userInputField.map((item) => (
                <TextField
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  variant="outlined"
                  type="name"
                  className={classes.userInput}
                  required
                  onChange={(e) => item.onChange(e.target.value)}
                  color="info"
                />
              ))}
              <CustomButton
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
