import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ResetPassword.css";
const initialState = {
  password: "",
  err: "",
  success: "",
};

function ResetPassword() {
  const [data, setData] = useState(initialState);
  const { token } = useParams();

  const { password, err, success } = data;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, err: "", success: "" });
  };

  const handleResetPassword = async () => {
    try {
      const res = await axios.post(
        `http://localhost:2000/api/changepassword/${token}`,
        { password },
        {
          headers: { Authorization: token },
        }
      );
      return setData({ ...data, err: "", success: res.data.msg });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fg_pass">
      <h2>Reset Password</h2>
      <div className="row">
        <label htmlFor="password">Enter your password </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleChangeInput}
        />
        <button onClick={handleResetPassword}>Reset Password</button>
      </div>
    </div>
  );
}
export default ResetPassword;
