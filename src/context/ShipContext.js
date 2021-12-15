import React, { createContext, useState } from "react";

const ShipContext = createContext();

const ShipsContextProvider = ({ children }) => {
  const [state, setState] = useState(null);
  const value = { state, setState };

  return <ShipContext.Provider value={value}>{children}</ShipContext.Provider>;
};

export { ShipContext, ShipsContextProvider };
