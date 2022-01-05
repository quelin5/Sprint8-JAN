import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ShipDetail from "../components/ShipDetail";

import "../App.css";

const ShipDetailPage = () => {
  const location = useLocation();
  return <ShipDetail />;
};

export default ShipDetailPage;
