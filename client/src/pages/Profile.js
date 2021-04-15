import React from "react";
import "../styles/Profile.css";
import Axios from "axios";

const Profile = () => {
    return (
    <div className='Profile'>
      <div className='box'>
        <h2>Basic Information</h2>
        <br></br>
        <label><b>Username</b></label><br></br><br></br>
        <label><b>Email Address</b></label>
      </div>
    </div>
  );
};

export default Profile;