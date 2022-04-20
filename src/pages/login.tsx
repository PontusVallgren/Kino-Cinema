import { Box, TextField } from "@mui/material";
import { NextPage } from "next";
import React, { useState } from "react";
import { CenterHorizon } from "../components/CustomMUI/CustomUI";

const Login: NextPage = () => {
  const [isNewMember, setIsNewMember] = useState<boolean>(false);

  return (
    <div className="main">
      {isNewMember ? (
        <>
          <CenterHorizon component="form">
            <TextField></TextField>
          </CenterHorizon>
        </>
      ) : (
        "no"
      )}
    </div>
  );
};

export default Login;
