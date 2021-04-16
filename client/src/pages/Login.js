import React from "react";
import "../styles/Login.css";
import Nav from "../components/nav";
//import components

import LoginForm from "../components/LoginForm";
const Login = () => {
  return (
    <div className='RegisterLogin'>
      <Nav />
      <LoginForm />
    </div>
  );
};

export default Login;
