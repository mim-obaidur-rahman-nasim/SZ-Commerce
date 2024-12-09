import React from 'react'
import { Link } from 'react-router-dom';
import './CSS/LoginSignUp.css';

const LoginPage = () => {
  return (
    <div className="loginsignup">
    <div className="loginsignup-container">
      <h1>Login</h1>
      <div className="loginsignup-fields">
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
      </div>
      <button>Log In</button>
      <p className="loginsignup-login">Don't have an account? <Link to="/login">
            <span>Sign Up</span>
          </Link></p>
    </div>
  </div>
  )
}

export default LoginPage