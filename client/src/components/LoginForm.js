import React, { useContext, useState } from "react";
import Axios from "axios";
import { UserContext } from "./UserContext";

const LoginForm = () => {
  const [usernameLog, setUsernameLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  const {user, setUser} = useContext(UserContext);
  const login = () => {
    Axios.post("http://localhost:8000/login", {
      username: usernameLog,
      password: passwordLog,
    }).then((response) => {
      console.log(response);
      alert(response.data.correct);
      if(response.data.correct){
        setUser(usernameLog);
      }
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
          type='password'
          placeholder='Password...'
        />
        <button className='button' onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
