import React from "react";
import logo from "./LandingPage/images/favicon.png";
import "./Dashboard.css";
import { Link } from "react-router-dom";

const DashBoard = () => {
  return (
    <>
      <img src={logo} className="head-logo" />
      <Link to="/surveys/new">
        <button className="create-survey">Create a Survey</button>
      </Link>
      <button className="dashboard-btn">Dashboard</button>
      <a className="logout">Logout</a>
      <div className="footer"></div>
      <img src={logo} className="footer-logo" />
      <a className="create-survey-anchor">Create a Survey</a>
      <a className="about-us">About Us</a>
      <a className="contact-us">Contact Us</a>
      <a className="pricing">Pricing Us</a>
      <a className="terms">Terms of Use</a>
    </>
  );
};

export default DashBoard;
