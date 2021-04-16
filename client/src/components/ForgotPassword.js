import React, { useContext, useState } from "react";
import Axios from "axios";
import { UserContext } from "./UserContext";

const ForgotPassword = () => {
    //if email is valid, retrieve corresponding password
    const forgot = () => {
        alert("Your password is:")
    }

return (
    <div className='Forgot'>
      <div className='box'>
          <h2>Forgot Password</h2><br></br>
          <label>Email</label>
      <input
          className='input'
        //   onChange={(e) => {
        //     setPasswordLog(e.target.value);
        //   }}
          type='text'
          placeholder='Enter a valid email address'
        />
        <button className='button' onClick={forgot}>
          Forgot Password
        </button>
      </div>
      </div>
);
};

export default ForgotPassword;