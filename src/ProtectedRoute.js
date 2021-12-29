import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import ShipListPage from "./pages/ShipListPage";
import { AuthContext } from "./context/AuthContext";

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <ShipListPage /> : <Navigate to="/log-in" />;
};

export default ProtectedRoute;
