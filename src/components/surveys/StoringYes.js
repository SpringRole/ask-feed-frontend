import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { showErrMsg, showSuccessMsg } from "../utils/notification/Notification";
import axios from "axios";

function StoringYes() {
  const { id } = useParams();
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  console.log(useParams());

  useEffect(() => {
    if (id) {
      const activationEmail = async () => {
        try {
          const res = await axios.put(
            `http://localhost:2000/survey/response/yes/${id}`,
            {
              id,
            }
          );
          setSuccess(res.data.msg);
        } catch (err) {
          err.response.data.msg && setErr(err.response.data.msg);
        }
      };
      activationEmail();
    }
  }, [id]);
  return (
    <div className="active_page">
      {err && showErrMsg(err)}
      {success && showSuccessMsg(success)}
      <h1 className="message">Thankyou! your response has been sent!</h1>
    </div>
  );
}
export default StoringYes;
