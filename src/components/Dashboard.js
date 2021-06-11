import React from "react";
import logo from "./LandingPage/images/favicon.png";
import "./Dashboard.css";
import { Link } from "react-router-dom";

const DashBoard = () => {
  return (
    <>
      <img src={logo} className="head-logo" alt="logo" />
      <Link to="/surveys/new">
        <button className="create-survey">Create a Survey</button>
      </Link>
      <button className="dashboard-btn">Dashboard</button>
      <a className="logout" href="/api/logout">
        Logout
      </a>
      <div className="info-box"></div>
      <label className="name-head">Name</label>
      <label className="name-info">Sanjam</label>
      <label className="email-head">Email</label>
      <label className="email-info">sanjamsinghkalsi@gmail.com</label>
      <div className="divider"></div>
      <div className="name-dashboard"> Sanjam's Dashboard </div>
      <div className="phone-number-head">Phone</div>
      <div className="phone-number-info">9878901905</div>
      <div className="footer"></div>
      <a className="change-password-anchor" href="/api/resetlink">
        Change Password
      </a>
      <img src={logo} className="footer-logo" alt="logo" />
      <label className="current-survey-head">Current Surveys</label>
      <div className="survey-box"></div>
      <div className="box-info">
        You dont have any Survey’s Start creating one!
      </div>
      <a className="create-survey-anchor" href="/surveys/new">
        Create a Survey
      </a>
      <a className="about-us" href="/about">
        About Us
      </a>
      <a className="contact-us" href="/contact">
        Contact Us
      </a>
      {/* <a className="pricing" >Pricing Us</a> */}
      <a className="terms" href="/terms">
        Terms of Use
      </a>
    </>
  );
};

export default DashBoard;
