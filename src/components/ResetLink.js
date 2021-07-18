import React, { useState } from "react";
import axios from "axios";

const initialState = {
  email: "",
  err: "",
  success: "",
};

const ResetLink = () => {
  const [data, setData] = useState(initialState);
  const { email, err, success } = data;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, err: "", success: "" });
  };

  const forgetPassword = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/resetlink", {
        email,
      });
      return setData({ ...data, err: "", success: res.data.msg });
    } catch (err) {
      console.log(err);
      console.log(email);
    }
  };

  return (
    <div className="fg_pass">
      <div className="row">
        <h2>Forget Password? Don't Worry we got you!</h2>

        <label htmlFor="email">Enter your email address!</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleChangeInput}
        />
        <button onClick={forgetPassword}>Verify your email</button>
      </div>
    </div>
  );
};
export default ResetLink;
