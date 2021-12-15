import React, { useEffect, useContext, Fragment } from "react";
import { useNavigate } from "react-router";
import "../App.css";
import { ShipContext } from "../context/ShipContext";

const ShipDetail = ({ ship }) => {
  const { state } = useContext(ShipContext);
  const navigate = useNavigate();

  useEffect(() => {
    !state && navigate("/ship-list");
  }, [state, navigate]);

  return (
    state && (
      <Fragment>
        <div className="shipdetail-whole-div">
          <h2>Name: {state.name}</h2>

          <div className="shipdetail-characteristics">
            <div>
              <p>Model: {state.model}</p>
              <p>Manufacturer: {state.manufacturer}</p>
              <p>Length: {state.length}</p>
            </div>
            <div>
              <p>Crew: {state.crew}</p>
              <p>Atmosphere speed: {state.max_atmosphering_speed}</p>
              <p>Cost in credits: {state.cost_in_credits}</p>
            </div>
          </div>
        </div>
      </Fragment>
    )
  );
};

export default ShipDetail;
