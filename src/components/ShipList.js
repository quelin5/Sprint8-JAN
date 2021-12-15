import React, { useEffect, useState, Fragment } from "react";
import Ship from "./Ship";
import "../App.css";

// Le pasamos por props el listado de naves
const ShipList = ({ ships, retrieveMoreShips }) => {
  return (
    <Fragment>
      <div>
        {ships.map((ship) => (
          <Ship key={ship.url} ship={ship} />
        ))}
      </div>
      <button className="button-viewmore" onClick={retrieveMoreShips}>
        View More
      </button>
    </Fragment>
  );
};

export default ShipList;
