import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { showErrMsg, showSuccessMsg } from "./utils/notification/Notification";
import axios from "axios";
function ActivationEmail() {
  const { token } = useParams();
  // console.log(token);
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  console.log(useParams());

  useEffect(() => {
    if (token) {
      const activationEmail = async () => {
        try {
          const res = await axios.post(`/api/activate/${token}`, {
            token,
          });
          setSuccess(res.data.msg);
        } catch (err) {
          err.response.data.msg && setErr(err.response.data.msg);
        }
        // console.log(res);
      };
      activationEmail();
    }
  }, [token]);

  // const res = await fetch("/api/signup", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },

  //   const [err, setErr] = useState("");
  //   const [success, setSuccess] = useState("");
  //   useEffect(()=>{
  //       if(tonpmken){
  //           const
  //       }
  //   })
  return (
    <div className="active_page">
      {err && showErrMsg(err)}
      {success && showSuccessMsg(success)}
      {/* <NavLink>Kindly click on this link</NavLink> */}
      <h1>Successs!!</h1>
      {/* <Button onClick={}/> */}
    </div>
  );
}
export default ActivationEmail;
