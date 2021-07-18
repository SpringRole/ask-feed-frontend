import React from "react";
import logo from "./LandingPage/images/favicon.png";
import "./Dashboard.css";
import SurveyList from "./surveys/SurveyList";
import { Link } from "react-router-dom";

const DashBoard = () => {
  return (
    <>
      <img src={logo} className="head-logo" alt="logo" />
      <Link to="/surveys/new">
        <button className="create-survey">Create a Survey</button>
      </Link>
      <button className="dashboard-btn">Dashboard</button>
      <Link className="logout" to="/api/logout">
        Logout
      </Link>
      <div className="info-box"></div>
      <label className="name-head">Name</label>
      <label className="name-info">Sanjam Singh</label>
      <label className="email-head">Email</label>
      <label className="email-info">csecec.1802194@gmail.com</label>
      <div className="divider"></div>
      <div className="name-dashboard"> Sanjam's Dashboard </div>
      <div className="phone-number-head">Phone</div>
      <div className="phone-number-info">9878901905</div>
      <div className="footer"></div>
      <a className="change-password-anchor" href="/api/resetlink">
        Change Password
      </a>
      <Link to="/api/editInfo" className="edit-info">
        Edit your Info!
      </Link>
      <img src={logo} className="footer-logo" alt="logo" />
      <label className="current-survey-head">Current Surveys</label>
      <div className="survey-box"></div>
      <div className="box-info">
        <SurveyList />
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
      <a className="terms" href="/terms">
        Terms of Use
      </a>
    </>
  );
};

export default DashBoard;
