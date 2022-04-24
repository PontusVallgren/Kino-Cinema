import { FormGroup, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { GetServerSideProps, NextPage } from "next";
import React, { FormEvent, useState } from "react";
import {
  CenterHorizon,
  CustomButton,
  CustomText,
} from "../../components/CustomMUI/CustomUI";
import SignUp from "../../components/SignUp";
import classes from "./index.module.css";
import Cookies from "cookies";
import LoginForm from "../../components/loginForm";

// export const getServerSideProps: GetServerSideProps = async (
//   context
// ): Promise<isCookieProps> => {
//   const cookies = new Cookies(context.req, context.res);
//   const sessionStr = await cookies.get("session");
//   console.log(sessionStr, "sessionstr");
//   if (sessionStr) {
//     console.log("there is cookie");
//     return {
//       props: {
//         isCookie: true,
//       },
//     };
//   }
//   console.log("there is no cookie");

//   return { props: { isCookie: false } };
// };

// type isCookieProps = {
//   props: {
//     isCookie: boolean;
//   };
// };

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
          <Box className={classes.loggedIn}>
            <Box className={classes.loginAlarm}>
              <h1>hello i logged in</h1>
            </Box>
          </Box>
        </>
      ) : (
        <SignUp userClickedBack={handleBack} />
      )}
    </div>
  );
};

export default Login;
