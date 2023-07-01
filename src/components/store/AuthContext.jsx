import { createContext, useState } from "react";

export const AuthContext = createContext({});

const AuthContextProvider = (props) => {
  const [isActive, setIsActive] = useState(false);

  const activateHandler = () => {
    setIsActive((prev) => !prev);
  };

  const obj = { activateHandler: activateHandler, isActive: isActive };

  return (
    <AuthContext.Provider value={obj}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
