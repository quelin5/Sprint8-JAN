import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShipListPage from "./pages/ShipListPage";
import ShipDetailPage from "./pages/ShipDetailPage";
import Home from "./pages/Home";
import Header from "./components/Header";
import "./App.css";
import { ShipsContextProvider } from "./context/ShipContext";

function App() {
  return (
    <ShipsContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/ship-list" element={<ShipListPage />} />
          <Route path="/ship-detail" element={<ShipDetailPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ShipsContextProvider>
  );
}

export default App;
