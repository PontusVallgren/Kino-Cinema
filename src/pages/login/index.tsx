import { NextPage } from "next";
import React, { useState } from "react";

import SignUp from "../../components/login/SignUp";
import LoginForm from "../../components/login/LoginForm";

const Login: NextPage = () => {
  const [isMember, setIsMember] = useState<boolean>(true);

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
        <SignUp goBack={handleBack} />
      )}
    </div>
  );
};

export default Login;
