import React from "react";

const SignUp: React.FC = () => {
  const handleSign = async () => {
    await fetch(`/api/account`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: "ooo",
        userPassword: "hehi",
      }),
    });
  };
  return (
    <>
      <button onClick={handleSign}>send</button>
    </>
  );
};

export default SignUp;
