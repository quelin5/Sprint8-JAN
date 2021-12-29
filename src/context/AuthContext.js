import React, { useState, createContext } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");

  let users = {
    isAuthenticated,
    setIsAuthenticated,
    userName,
    setUserName,
  };

  return <AuthContext.Provider value={users}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
