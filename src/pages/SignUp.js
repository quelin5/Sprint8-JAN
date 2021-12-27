import React, { Fragment, useState } from "react";

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
    let str_users = localStorage.getItem("users");
    let users;

    if (str_users != null) {
      users = JSON.parse(str_users);
      users.push(user);
    } else {
      users = [user];
    }
    localStorage.setItem("users", JSON.stringify(users));
    console.log(users);
  };

  //obtener info del localStorage
  function obtenerStorage() {
    const user = JSON.parse(localStorage.getItem("users"));
    console.log(user);
  }
  obtenerStorage();

  return (
    <Fragment>
      <div className="signUp-div">
        <h1>Create a new account</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="name"> Name </label>
            <input
              type="text"
              id="name"
              name="name"
              //value={nombre}
              onChange={onChangeLogIn}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email"> Email </label>
            <input
              type="email"
              id="email"
              name="email"
              //value={email}
              onChange={onChangeLogIn}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password"> Password </label>
            <input
              type="password"
              id="password"
              name="password"
              //value={password}
              onChange={onChangeLogIn}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirmPassword"> Confirm password </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
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
