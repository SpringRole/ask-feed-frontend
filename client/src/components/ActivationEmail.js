import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { showErrMsg, showSuccessMsg } from "./utils/notification/Notification";
import axios from "axios";
import "./ActivationEmail.css";
import logo from "./LandingPage/images/favicon.png";
function ActivationEmail() {
  const { token } = useParams();

  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  console.log(useParams());

  useEffect(() => {
    if (token) {
      const activationEmail = async () => {
        try {
          const res = await axios.post(
            `${process.env.REACT_APP_API_KEY}/api/activate/${token}`,
            {
              token,
            }
          );
          setSuccess(res.data.msg);
        } catch (err) {
          err.response.data.msg && setErr(err.response.data.msg);
        }
      };
      activationEmail();
    }
  }, [token]);

  return (
    <>
      <div className="active_page">
        {err && showErrMsg(err)}
        {success && showSuccessMsg(success)}

        <h1
          className="message"
          style={{ textAlign: "center", marginTop: "30px" }}
        >
          Successs!! Click on login to get redirected to the login page!
        </h1>
        <a
          href="/login"
          className="login-anchor"
          style={{ textAlign: "center", left: "50px" }}
        >
          Login!
        </a>
      </div>
      <img src={logo} alt="logo" className="logo-activation" />
    </>
  );
}
export default ActivationEmail;
