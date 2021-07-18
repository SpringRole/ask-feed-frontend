import React, { useState } from "react";
import "./Login.css";
import { NavLink, useHistory } from "react-router-dom";
import logo from "./LandingPage/images/favicon.png";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch(`${process.env.REACT_APP_API_KEY}/api/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = res.json();
    if (!data) {
      window.alert("Invalid credentials!");
    } else {
      window.alert("Login Successful!");
      history.push("/dashboard");
    }
  };

  return (
    <>
      <div className="login">
        <div className="left-col">
          <img className="logo" src={logo} />
          <p className="head">Welcome Back!</p>
          <p className="head-description">
            To keep connected with us, please login with your personal
            information
          </p>
        </div>
        <div className="signin-form">
          <h2 className="form-title">Login</h2>
          <form method="POST" className="register-form" id="register-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="password"
                id="password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
              />
            </div>
            <div className="form-group form-button">
              <input
                type="submit"
                name="signin"
                id="signin"
                className="signin"
                value="Log in"
                onClick={loginUser}
                required
              />
            </div>
            <NavLink to="/api/resetlink" className="reset-password">
              Forget Password ?
            </NavLink>
            <NavLink to="/register" className="signin-link">
              Don't have an account yet ?
            </NavLink>
            <button className="register-btn">Create an Account</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
