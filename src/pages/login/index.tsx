import { NextPage } from "next";
import React, { useState } from "react";

import SignUp from "../../components/login/SignUp";
import LoginForm from "../../components/login/LoginForm";
import classes from "./index.module.css";
import { Box } from "@mui/system";

const Login: NextPage = () => {
  const [isMember, setIsMember] = useState<boolean>(true);
  const [passwordWrong, setPasswordWrong] = useState<boolean>(false);

  const handleMember = (value: boolean) => {
    setIsMember(value);
  };

  const handleBack = (value: boolean) => {
    if (value) {
      setIsMember(true);
    }
  };
  return (
    <div className="main">
      {isMember ? (
        <LoginForm newMember={handleMember} />
      ) : (
        <SignUp userClickedBack={handleBack} />
      )}
    </div>
  );
};

export default Login;
