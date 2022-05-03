import React, { createContext, useState, FC, PropsWithChildren } from "react";
import { ILoggedInContextType, ChildrenProps } from "../../types";

export const LoggedInContext = createContext<ILoggedInContextType>({
  isLoggedIn: false,
  username: "",
  changeLogInState: (value: boolean) => ({}),
});

const LoggedInProvider: FC<PropsWithChildren<ChildrenProps>> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const changeLogInState = (value: boolean, username: string) => {
    setIsLoggedIn(value);
    setUsername(username);
  };

  return (
    <LoggedInContext.Provider
      value={{ isLoggedIn, username, changeLogInState }}
    >
      {children}
    </LoggedInContext.Provider>
  );
};

export default LoggedInProvider;
