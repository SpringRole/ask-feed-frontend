import React from "react";
import { Link } from "react-router-dom";

const EditInfo = () => {

  const editInfo = () => {
    window.alert("Updated Successfully!");
  };

  return (
    <>
      <h3
        style={{ marginBottom: "53px", fontWeight: "bold", color: "#3362a8" }}
      >
        Please edit your entries 👉🏼
      </h3>
      <div>
        <label style={{ fontSize: "35px", color: "#3362a8" }}>Name:</label>
        <input
          style={{ marginBottom: "5px", fontSize: "30px" }}
        />
        <div
          className="red-text"
          style={{ marginBottom: "20px", fontSize: "30px" }}
        ></div>
        <label style={{ fontSize: "35px", color: "#3362a8" }}>
          Phone Number:
        </label>
        <input
          style={{ marginBottom: "5px", fontSize: "30px" }}
          value="9878901905"
        />
        <div
          className="red-text"
          style={{ marginBottom: "20px", fontSize: "30px" }}
        ></div>
        <button
          className="green btn-flat right white-text"
          style={{ fontSize: "30px", height: "50px" }}
          onClick={editInfo}
        >
          Submit
        </button>
        <Link
          to="/dashboard"
          className="blue btn-flat white-text"
          style={{ fontSize: "30px", height: "50px" }}
        >
          Back
        </Link>
      </div>
    </>
  );
};
export default EditInfo;
