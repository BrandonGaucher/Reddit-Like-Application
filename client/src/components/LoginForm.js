import React, { useContext, useState } from "react";
import Axios from "axios";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";
import "../styles/Bread.css";


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
        document.getElementById("loginF").reset();
      }
    });
  };

  return (
    <div className='Login'>
      <span className='notbread'><Link to='/' class='bread'>
          Home
        </Link> | Login</span>
      <form id="loginF" onSubmit={
        (e) => {
          e.preventDefault();
          e.stopPropagation();
          login();
        }
      }>
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
            required
          />
          <label>Password</label>
          <input
            className='input'
            onChange={(e) => {
              setPasswordLog(e.target.value);
            }}
            type='password'
            placeholder='Password...'
            required
          />
          {user == "Guest" ? (
          <input type="submit" value="Login" className='button'/>
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
      </form>
    </div>
  );
};

export default LoginForm;
