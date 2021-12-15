import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { ShipContext } from "../context/ShipContext";
import "../App.css";

const Ship = ({ ship }) => {
  // extraer los datos que nos interesan de "Ship" -->
  const { name, model } = ship;

  const navigate = useNavigate();
  const handleNavigateToDetail = () => {
    navigate("/ship-detail");
    setState(ship);
  };

  const { state, setState } = useContext(ShipContext);
  console.log(state);
  // Primero mostrar la lista de naves.
  //Cuando se hace click en una nave, (state===true) mostrar info solo de esa nave.

  return (
    <div onClick={() => handleNavigateToDetail()} className="ship-detail">
      <div className="shipInfo-parent">
        <div className="shipInfo-div">
          <a className="cursor">
            <p className="shipName"> Name: {name}</p>
            <p> Model: {model}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ship;
