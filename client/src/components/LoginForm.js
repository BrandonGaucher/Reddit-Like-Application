import React from "react";

const LoginForm = () => {
  return (
    <div className='Login'>
      <div className='box'>
        <h2>Login</h2>
        <br></br>
        <label>Username</label>
        <input className='input' type='text' placeholder='Username...' />
        <input className='input' type='password' placeholder='Password...' />
        <a className='button' href=''>
          Login
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
