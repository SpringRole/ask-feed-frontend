import React, { Component } from "react";
import _ from "lodash";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import "./SurveyForm.css";
import formFields from "./formFields";
import validateEmails from "../utils/validateEmails";

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <h3
          style={{ marginBottom: "53px", fontWeight: "bold", color: "#3362a8" }}
        >
          Please provide the following details 👉🏼
        </h3>
        <form
          className="text-form"
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
        >
          {this.renderFields()}
          <Link
            to="/dashboard"
            className="red btn-flat white-text"
            style={{ fontSize: "30px", height: "50px" }}
          >
            Cancel
          </Link>

          <button
            className="teal btn-flat right white-text"
            style={{ fontSize: "30px", height: "50px" }}
            type="submit"
          >
            Next
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  errors.recipients = validateEmails(values.recipients || "");

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "Please enter a value!";
    }
  });

  return errors;
}
export default reduxForm({
  validate: validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);



