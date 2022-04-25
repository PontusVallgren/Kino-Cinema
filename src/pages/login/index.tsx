import { NextPage } from "next";
import React, { useState } from "react";

import SignUp from "../../components/login/SignUp";
import LoginForm from "../../components/login/LoginForm";

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
        <>
          <LoginForm newMember={handleMember} />
          {/* <Box className={classes.loggedIn}>
            <Box className={classes.loginAlarm}>
              <h1>hello i logged in</h1>
            </Box>
          </Box> */}
        </>
      ) : (
        <SignUp userClickedBack={handleBack} />
      )}
    </div>
  );
};

export default Login;
