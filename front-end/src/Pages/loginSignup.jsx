import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/LoginSignUp.css';

const LoginSignUp = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account?{' '}
          <Link to="/loginpage">
            <span>Login here</span>
          </Link>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, you agree to our Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
