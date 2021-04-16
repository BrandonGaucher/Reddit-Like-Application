import React, { useContext, useState } from "react";
import Axios from "axios";
import { UserContext } from "./UserContext";

const LoginForm = () => {
  const [usernameLog, setUsernameLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  const { user, setUser } = useContext(UserContext);
  const login = () => {
    Axios.post("http://localhost:8000/login", {
      username: usernameLog,
      password: passwordLog,
    }).then((response) => {
      console.log(response);
      if (response.data.correct) {
        alert("Logged in successfully");
        setUser(usernameLog);
      }
      else{
        alert("There was a problem with logging in");
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
        <label>Password</label>
        <input
          className='input'
          onChange={(e) => {
            setPasswordLog(e.target.value);
          }}
          type='password'
          placeholder='Password...'
        />
        {user == "Guest" ? (
        <button className='button' onClick={login}>
          Login
        </button>
        ) : (
          <button className='button' onClick={
            async() => {
              setUser("Guest");
            }
          }>
            Logout
          </button>
        )

        }
      </div>
    </div>
  );
};

export default LoginForm;
