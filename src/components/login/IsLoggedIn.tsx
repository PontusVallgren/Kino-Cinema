import React, { createContext, useState, FC, PropsWithChildren } from "react";
import { ILoggedInContextType, ChildrenProps } from "../../types";

// const defaultState = {
//   isLoggedIn: false,
//   changeLogInState: () => {},
// };

export const LoggedInContext = createContext<ILoggedInContextType>({
  isLoggedIn: false,
  changeLogInState: () => ({}),
});

const LoggedInProvider: FC<PropsWithChildren<ChildrenProps>> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const changeLogInState = () => setIsLoggedIn(!isLoggedIn);

  return (
    <LoggedInContext.Provider value={{ isLoggedIn, changeLogInState }}>
      {children}
    </LoggedInContext.Provider>
  );
};

export default LoggedInProvider;
