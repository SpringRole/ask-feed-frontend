import React, { Component } from "react";
import LandingPage from "./LandingPage/LandingPage.js";
import { Route, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Login from "./Login";
import Signup from "./Signup";
import About from "./About";
import Dashboard from "./Dashboard";
import SurveyNew from "./SurveyNew";
import Header from "./Header";
import "./App.css";
import ActivationEmail from "./ActivationEmail";

class App extends Component {
  // componentDidMount() {
  //   this.props.fetchUser();
  // }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            {/* <Route exact path="/header">
            <Header />
          </Route> */}
            {/* <Header /> */}
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Signup />
            </Route>
            {/* <Route exact path="/about">
            <About />
          </Route> */}
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route
              exact
              path="/api/activate/:token"
              component={ActivationEmail}
            />

            {/* <Route exact path="/surveys/new">
            <SurveyNew />
          </Route>  */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
