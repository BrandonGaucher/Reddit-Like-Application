//import React from "react";
import "../styles/Profile.css";
import Axios from "axios";

import React, { useContext, useState } from "react";
import { UserContext } from "../components/UserContext";
import Nav from "../components/nav";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className='Profile'>
      <Nav />
      <div className='box'>
        <h2>Basic Information</h2>
        <br></br>
        <label>
          <b>Username: </b>
        </label>
        <label>{user}</label>
        <br></br>
        <br></br>
        <label>
          <b>Email Address: </b>
        </label>
      </div>
    </div>
  );
};

export default Profile;
