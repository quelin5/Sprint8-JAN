import React, { Fragment } from "react";
import "../App.css";
import ShipListPage from "./ShipListPage";
import { Link } from "react-router-dom";

const Home = () => {
  const goToShiplist = () => {
    return <ShipListPage />;
  };

  return (
    <Fragment>
      <div className="homepage-div">
        <p className="homepage">
          ALL OF OUR STAR WARS FAVORITES NOW STREAMING ON DISNEY+
        </p>
      </div>
      <div>
        <Link to={"/ship-list"}>
          <button> Go to the Starships List </button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Home;
