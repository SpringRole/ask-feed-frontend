//this file will contain the logic to render a single label and text input
import React from "react";
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label style={{ fontSize: "35px", color: "#3362a8" }}>{label}</label>
      <input {...input} style={{ marginBottom: "5px", fontSize: "30px" }} />
      <div
        className="red-text"
        style={{ marginBottom: "20px", fontSize: "30px" }}
      >
        {touched && error}
      </div>
    </div>
  );
};
