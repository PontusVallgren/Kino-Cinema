import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { validatePassword } from "../../server/utils/password";
import { visiblePasswordState } from "../../types";
import useLoginStyles from "../CustomMUI/loginStyle";

type passwordFieldType = {
  setUserPassword: (value: string) => void;
  setStrongPassword?: (value: boolean) => void | undefined;
  setPasswordWrong?: (value: boolean) => void | undefined;
};

const PasswordField: React.FC<passwordFieldType> = ({
  setUserPassword,
  setStrongPassword,
  setPasswordWrong,
}) => {
  const [values, setValues] = useState<visiblePasswordState>({
    showPassword: false,
  });

  const handleStrongPassword = (value: string) => {
    if (setStrongPassword) {
      if (!validatePassword(value)) {
        setStrongPassword(false);
      } else {
        setStrongPassword(true);
      }
    }
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

  const { classes } = useLoginStyles();

  return (
    <>
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
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        onChange={(e) => {
          setUserPassword(e.target.value);

          if (setStrongPassword) handleStrongPassword(e.target.value);

          if (setPasswordWrong) setPasswordWrong(false);
        }}
      />
    </>
  );
};

export default PasswordField;
