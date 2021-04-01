import React, { useState } from "react";
import Axios from "axios";
const LoginForm = () => {
  const [usernameLog, setUsernameLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  const login = () => {
    Axios.post("http://localhost:8000/login", {
      username: usernameLog,
      password: passwordLog,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className='Login'>
      <div className='box'>
        <h2>Login</h2>
        <br></br>
        <label>Username</label>
        <input
          className='input'
          onChange={(e) => {
            setUsernameLog(e.target.value);
          }}
          type='text'
          placeholder='Username...'
        />
        <input
          className='input'
          onChange={(e) => {
            setPasswordLog(e.target.value);
          }}
          settype='password'
          placeholder='Password...'
        />
        <button className='button' onClick=''>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
