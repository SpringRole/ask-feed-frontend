import React, { Component } from "react";
import _ from "lodash";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import "./SurveyForm.css";

const FIELDS = [
  { label: "Survey Title", name: "title" },
  { label: "Subject  Line", name: "subject" },
  { label: "Email Body", name: "body" },
  { label: "Recipient List", name: "emails" },
];

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
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
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

  if (!values.title) {
    errors.title = "You must provide a title!";
  }

  return errors;
}
export default reduxForm({
  validate: validate,
  form: "surveyForm",
})(SurveyForm);
