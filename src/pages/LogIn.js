import React, { Fragment, useState, useContext } from "react";
import ShipListPage from "./ShipListPage";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import AuthMessage from "../utils/AuthMessage";

const LogIn = () => {
  const { setUserName, setIsAuthenticated, isAuthenticated } =
    useContext(AuthContext);

  // Read info:
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Extract from user
  const { email, password } = user;

  // Keep up new changes from user input
  const onChangeLogIn = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // OnSubmit
  const onSubmit = (e) => {
    e.preventDefault();

    // Pass to Action!
    let users = localStorage.getItem("users");
    users = JSON.parse(users);

    if (users != null) {
      let userExists = users.filter((users) => users.email === user.email);
      if (userExists.length > 0) {
        setIsAuthenticated(true);
        setUserName(userExists[0].email);
        console.log("The user exists");
      }
    } else {
      setIsAuthenticated(false);
      console.log("There is no user in the database");
    }
  };

  return (
    <Fragment>
      {isAuthenticated ? (
        <AuthMessage>You're logged in!</AuthMessage>
      ) : (
        <div className="login-div">
          <h1>Log In </h1>
          <form onSubmit={onSubmit}>
            <div className="">
              <label htmlFor="email"> Email </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChangeLogIn}
              />
            </div>
            <div className="">
              <label htmlFor="password"> Password </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="*********"
                value={password}
                onChange={onChangeLogIn}
              />
            </div>
            <input type="submit" />
          </form>
        </div>
      )}
    </Fragment>
  );
};

export default LogIn;
