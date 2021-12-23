import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import letters from "../images/sw-logoL.png";

const Header = () => {
  return (
    <Fragment>
      <div className="login-signin">
        <Link className="log-in" to={"/log-in"}>
          LOG IN
        </Link>
        <Link className="sign-up" to={"/sign-up"}>
          SIGN UP
        </Link>
      </div>

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
