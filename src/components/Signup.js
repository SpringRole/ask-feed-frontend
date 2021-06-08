import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Signup.css";
import logo from "../LandingPage/images/favicon.png";

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, password } = user;
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        email: email,
        phoneNo: phone,
        password: password,
      }),
    });
    const data = await res.json();
    if (!data) {
      window.alert("Invalid!");
      console.log("Invalid!");
    } else {
      window.alert("Sucess!");
      console.log(data);
      history.push("/login");
    }
  };

  return (
    <>
      <div className="signup">
        <div className="container">
          <div className="left-column">
            <img className src={logo} />
            <h2 className="head">Hello from Askfeed!</h2>
            <p className="left-description">
              Enter your personal details and start your journey with us
            </p>
          </div>
          <button className="login-btn">Login</button>
          <form method="POST" className="modal-content" id="register-form">
            <label htmlFor="customerName">Name</label>
            <input
              type="text"
              name="name"
              className="name"
              id="name"
              autoComplete="off"
              value={user.name}
              onChange={handleInputs}
              placeholder="Your Name"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="password"
              name="password"
              id="password"
              autoComplete="off"
              value={user.password}
              onChange={handleInputs}
              placeholder="Your password"
              required
            />

            <label htmlFor="customerEmail">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="email"
              autoComplete="off"
              value={user.email}
              onChange={handleInputs}
              placeholder="Your email"
              required
            />

            <label htmlFor="customerPhone">Phone</label>
            <input
              type="number"
              name="phone"
              id="phone"
              className="phone"
              autoComplete="off"
              value={user.phone}
              onChange={handleInputs}
              placeholder="Your phone"
              required
            />

            <div className="form-group form-button">
              <input
                type="submit"
                name="signup"
                id="signup"
                className="register"
                value="Register!"
                onClick={PostData}
                required
              />
            </div>
            <NavLink to="/login" className="clearfix">
              Already a user?
            </NavLink>
          </form>
        </div>
      </div>
      <div className="divider"></div>
      <div className="circle"></div>
      <p className="OR">OR</p>
      <div className="options">Login with</div>
      <button className="GoogleLogin">Goggle</button>
      <div className="terms">
        By clicking ‘Register’, you agree to the Terms of Use and Privacy
        Notice. You also agree to receive information and offers relevant to our
        services via email. You can opt-out of these emails in your My Account
        page anytime.
      </div>
    </>
  );
};

export default Signup;
