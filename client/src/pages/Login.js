import React from "react";
import "../styles/Login.css";

//import components
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className='RegisterLogin'>
      <RegisterForm />
      <LoginForm />
    </div>
  );
};

export default Login;
