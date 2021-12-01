import React from "react";
import Ship from "./Ship";

// Le pasamos por props el listado de naves
const ShipList = ({ ships }) => {
  return (
    <div className="row">
      {ships.map((ship) => (
        <Ship key={ship.url} ship={ship} />
      ))}
    </div>
  );
};

export default ShipList;
