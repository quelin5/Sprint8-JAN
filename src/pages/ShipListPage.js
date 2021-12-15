import React, { useEffect, useState } from "react";
import ShipList from "../components/ShipList";

const ShipListPage = () => {
  const [ships, getShipsInfo] = useState([]); //initializes as an empty object since it is gonna get an object.
  const [nextShip, getNextShip] = useState(null);

  const getInfoFromAPI = async () => {
    const api = await fetch("https://swapi.dev/api/starships/");
    const shipsInfo = await api.json();

    // Save in the State the info regarding the ships.
    getShipsInfo(shipsInfo.results);
    getNextShip(shipsInfo.next);
    console.log(ships);
  };

  const retrieveMoreShips = async () => {
    const api = await fetch(nextShip);
    const shipsInfo = await api.json();

    getShipsInfo((prev) => prev.concat(shipsInfo.results));
    getNextShip(shipsInfo.next);
  };

  //useEffect para cuando recién entra en la página se llame a la función que llama a la API
  useEffect(() => {
    getInfoFromAPI();
  }, []);

  return <ShipList ships={ships} retrieveMoreShips={retrieveMoreShips} />;
};

export default ShipListPage;
