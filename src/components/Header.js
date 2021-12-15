import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import letters from "../images/sw-logoL.png";

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="login-logo">
          <div className="sw-logo-div">
            <img alt="" src={letters} className="sw-logoL" />
          </div>
        </div>

        <div className="topnav">
          <Link className="home" to={"/"}>
            HOME
          </Link>
          <Link to={"/ship-list"}>STARSHIPS</Link>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
