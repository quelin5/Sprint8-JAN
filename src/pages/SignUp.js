import React, { Fragment, useState, useEffect } from "react";

const SignUp = () => {
  //State sign up
  const [user, saveUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Extract from user
  const { name, email, password, confirmPassword } = user;

  // keep changes from users' input
  const onChangeLogIn = (e) => {
    saveUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // user wants to log in
  const onSubmit = (e) => {
    e.preventDefault();

    //guardar en el LocalStorage
    localStorage.setItem("user", JSON.stringify(user));
  };

  //obtener info del localStorage
  function obtenerStorage() {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
  }
  obtenerStorage();

  return (
    <Fragment>
      <div className="signUp-div">
        <h1>Create a new account</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="name"> Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="your name"
              //value={nombre}
              onChange={onChangeLogIn}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email"> Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your email"
              //value={email}
              onChange={onChangeLogIn}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password"> Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="your password"
              //value={password}
              onChange={onChangeLogIn}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirmPassword"> Confirm password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="your password "
              //value={confirmar}
              onChange={onChangeLogIn}
            />
          </div>
          <div className="">
            <input type="submit" className="" value="Sign up" />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default SignUp;
