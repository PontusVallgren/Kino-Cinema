import React, { createContext, useState, FC, PropsWithChildren } from "react";
import { ILoggedInContextType, ChildrenProps } from "../../types";

export const LoggedInContext = createContext<ILoggedInContextType>({
  isLoggedIn: false,
  changeLogInState: (value: boolean) => ({}),
});

const LoggedInProvider: FC<PropsWithChildren<ChildrenProps>> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const changeLogInState = (value: boolean) => setIsLoggedIn(value);

  return (
    <LoggedInContext.Provider value={{ isLoggedIn, changeLogInState }}>
      {children}
    </LoggedInContext.Provider>
  );
};

export default LoggedInProvider;
