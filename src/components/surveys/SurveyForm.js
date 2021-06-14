import React, { Component } from "react";
import _ from "lodash";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import "./SurveyForm.css";

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
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
        <form
          className="text-form"
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
        >
          <Link>Cancel</Link>
          {this.renderFields()}
          <button className="submit-btn" type="submit">
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
