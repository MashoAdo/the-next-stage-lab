import React from "react";
import "../styles/registration.css";

function Registration() {
  return (
    <div className="form-container">
      <div className="form-header">
        <h5>SIGN UP</h5>

        <a href="https://www.google.com/" className="google-signup-btn">
          Continue with Google
        </a>

        <span className="or">or</span>

        <span className="signUp-with-Details">Sign up with Details</span>
      </div>

      <form action="/signup" method="post">
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="fullName">Full Name</label>
        <input type="text" name="fullName" id="fullName" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />

        <p className="terms-of-service">
          By sigining up, you confirm that you've read and accepted our{" "}
          <a href="example.com">Terms of Sevice</a> and{" "}
          <a href="example.com">Privacy Policy</a>
        </p>

        <button type="submit" className="sign-up-btn">
          Sign Up
        </button>

        <div className="login-instead">
          <a href="/login">Not your first time? Login instead</a>
        </div>
      </form>
    </div>
  );
}

export default Registration;
