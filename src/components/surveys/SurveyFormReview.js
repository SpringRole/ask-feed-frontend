import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions/index";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label style={{ fontSize: "35px", color: "#3362a8" }}>{label}</label>
        <div style={{ marginBottom: "20px", fontSize: "30px" }}>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div>
      <h3
        style={{ marginBottom: "53px", fontWeight: "bold", color: "#3362a8" }}
      >
        Please confirm your entries 👉🏼
      </h3>
      {reviewFields}
      <button
        className="yellow darken-3 white-text btn-flat"
        style={{ fontSize: "30px", height: "50px" }}
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="green btn-flat right white-text"
        style={{ fontSize: "30px", height: "50px" }}
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));

