import React, { useState } from "react";
import Axios from "axios";

const RegisterForm = () => {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const reg = () => {
    Axios.post("http://localhost:8000/register", {
      username: usernameReg,
      password: passwordReg,
      email: emailReg,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className='Register'>
      <div className='box'>
        <h2>Register</h2>
        <br></br>
        <label>Username</label>
        <input
          className='input'
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
          type='text'
          placeholder='Username...'
        />
        <label>Email</label>
        <input
          className='input'
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
          type='text'
          placeholder='Email...'
        />
        <label>Password</label>
        <input
          className='input'
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
          type='password'
          placeholder='Password...'
        />
        <button className='button' onClick={reg}>
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
