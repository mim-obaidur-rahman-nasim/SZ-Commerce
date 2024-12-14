import React, { useState } from 'react';
import './CSS/LoginSignUp.css';

const LoginSignUp = () => {

  const [state,setState] = useState("Log In");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  });

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async () => {
    console.log("Login working",formData)
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        accept:'application/form-data',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data);
    if(responseData.success){
      console.log(responseData)
      localStorage.setItem('auth-token',responseData.token);
      await window.location.replace("/");
    }
    else{
      alert(responseData.error);
    }
  }

  const signup = async () => {
    console.log("signup working",formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        accept:'application/form-data',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data);
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.error);
    }
  }


  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address" />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
        </div>
        <button onClick={()=>{state==="Log In"?login():signup()}}>Continue</button>
        {state==="Sign Up"?<p className="loginsignup-login">
          Already have an account?{' '}
            <span onClick={() => setState("Log In")}>Login here</span>
        </p> : <p className="loginsignup-login">
          Create an account?{' '}
            <span onClick={() => setState("Sign Up")}>Click here</span>
        </p>}
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, you agree to our Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
