import React from "react";

const Ship = ({ ship }) => {
  // extraer los datos que nos interesan de "Ship" -->
  const { name, model, url } = ship;

  return (
    <div className="shipInfo-parent">
      <div className="shipInfo-div">
        <a className="cursor" onClick={() => console.log("probando...")}>
          <p className="shipName"> Name: {name}</p>
          <p> Model: {model}</p>
        </a>
      </div>
    </div>
  );
};

export default Ship;
