import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
// import "materialize-css/dist/css/materialize.min.css";

const Logout = () => {
  const history = useHistory();
  useEffect(() => {
    fetch("/api/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        history.push("/login", { replace: true });
        if (res.status !== 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <p>Logout!</p>
    </>
  );
};
export default Logout;
