import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";
// import "materialize-css/dist/css/materialize.min.css";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveyList() {
    return this.props.surveys.reverse().map((survey) => {
      return (
        <div
          className="card darken-1"
          key={survey._id}
          style={{ width: "1013px", bottom: "227px", right: "345px" }}
        >
          <div className="card-content">
            <span className="card-title" style={{ color: "#3362a8" }}>
              {survey.body}
            </span>
            <p>{survey.subject}</p>
            <p className="right">
              Sent on: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a href="/dashboard" style={{ color: "green" }}>
              Yes: {survey.yes}
            </a>
            <a href="/dashboard" style={{ color: "red" }}>
              No: {survey.No}
            </a>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderSurveyList()}</div>;
  }
}
function mapStateToProps({ surveys }) {
  return { surveys: surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
