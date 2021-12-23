import React, { Fragment, useState, useEffect } from "react";

const LogIn = () => {
  // State log in new session
  const [user, saveUser] = useState({
    email: "",
    password: "",
  });

  // Extract from user
  const { email, password } = user;

  // Keep up new changes from user input
  const onChangeLogIn = (e) => {
    saveUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //onSubmit
  const onSubmit = (e) => {
    e.preventDefault();

    // pass to Action!
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
          <div className="">
            <input type="submit" className="" value="Log In" />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default LogIn;
