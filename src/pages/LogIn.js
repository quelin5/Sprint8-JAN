import React, { Fragment, useState } from "react";
import ShipListPage from "./ShipListPage";
import { Link } from "react-router-dom";

const LogIn = () => {
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

  const [isAuthenticated, setisAuthenticated] = useState(false);

  // OnSubmit
  const onSubmit = (e) => {
    e.preventDefault();

    // Pass to Action!
    let users = localStorage.getItem("users"); //from the other component
    users = JSON.parse(users);

    for (let i = 0; i < users.length; i++) {
      if (users[i].email === user.email) {
        setisAuthenticated(true);
        console.log(isAuthenticated);
      } else {
        setisAuthenticated(false);
        console.log(isAuthenticated);
      }
    }
  };

  return (
    <Fragment>
      <div className="login-div">
        <h1>Log In</h1>
        <form onSubmit={onSubmit}>
          <div className="">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChangeLogIn}
            />
          </div>
          <div className="">
            <label htmlFor="password">Password </label>
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
    </Fragment>
  );
};

export default LogIn;
