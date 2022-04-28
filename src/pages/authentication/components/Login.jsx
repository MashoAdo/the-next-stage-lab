import React from "react";
import "../styles/Login.css";

function Login() {
  return (
    <div className="form-container">
      <div className="form-header">
        <h5>LOGIN</h5>

        <a href="https://www.google.com/" className="google-signup-btn">
          Continue with Google
        </a>

        <span className="or">or</span>

        <span className="signUp-with-Details">Login with Details</span>
      </div>

      <form action="/signup" method="post">
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />

        <a href="#" className="forgot-password">
          Forgot Password?
        </a>

        <button type="submit" className="sign-up-btn">
          Login
        </button>

        <div className="login-instead">
          <a href="/login">Dont't have any account? Sign Up instead</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
