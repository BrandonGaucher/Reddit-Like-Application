import React from "react";
import Nav from "../components/nav";
//page components
import RegisterForm from "../components/RegisterForm";
const Register = () => {
  return (
    <div className='register'>
      <Nav />
      <RegisterForm />
    </div>
  );
};

export default Register;
