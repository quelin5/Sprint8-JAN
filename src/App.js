import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShipListPage from "./pages/ShipListPage";
import ShipDetailPage from "./pages/ShipDetailPage";
import Home from "./pages/Home";
import Header from "./components/Header";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import "./App.css";
import { ShipsContextProvider } from "./context/ShipContext";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <AuthContextProvider>
      <ShipsContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/ship-list" element={<ProtectedRoute />}>
              <Route path="/ship-list" element={<ShipListPage />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="/ship-detail" element={<ShipDetailPage />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/log-in" element={<LogIn />} />
          </Routes>
        </Router>
      </ShipsContextProvider>
    </AuthContextProvider>
  );
}

export default App;
