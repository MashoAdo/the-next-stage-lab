import React from "react";
import Login from "./components/Login";
import Registration from "./components/Registration";
import authStyles from "./styles/authentication.module.css";

function Authentication() {
  return (
    <div className={authStyles.authenticationContainer}>
      <Registration />
      {/* <Login /> */}
    </div>
  );
}

export default Authentication;
