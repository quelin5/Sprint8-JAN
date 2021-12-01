import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShipList from "./components/ShipList";
import "./App.css";
import letters from "./images/sw-logoL.png";

function App() {
  const [shipInfo, getShipsInfo] = useState([]); //initializes as an empty object since it is gonna get an object.
  const [buttonClicked, isButtonClicked] = useState(false);

  // Request API + Get each ships' info.
  const getInfoFromAPI = async () => {
    const api = await fetch("https://swapi.dev/api/starships/");
    const shipsInfo = await api.json();

    // Save in the State the info regarding the ships.
    getShipsInfo(shipsInfo.results);
  };

  return (
    <Fragment>
      <Router>
        <Routes>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/shipList" component={ShipList}></Route>
          <Route exact path="/ship" component={starship}></Route>
        </Routes>
      </Router>

      <div className="mainpage">
        <header className="header">
          <div>
            <div>
              <img alt="" src={letters} className="sw-logoL" />
            </div>
            <div></div>
          </div>

          <div className="topnav">
            <a href="home" className="home">
              HOME{" "}
            </a>
            <a href="javascript:;" onClick={() => isButtonClicked(true)}>
              {" "}
              STARSHIPS{" "}
            </a>
          </div>
        </header>

        <main>
          {buttonClicked === true
            ? getInfoFromAPI() & <ShipList ships={shipInfo} />
            : null}
          {shipInfo.length && <ShipList ships={shipInfo} />}
        </main>
      </div>
    </Fragment>
  );
}

export default App;
