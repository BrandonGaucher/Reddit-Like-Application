//import React from "react";
import "../styles/Profile.css";
import Axios from "axios";

import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../components/UserContext";
import Nav from "../components/nav";
import { Link } from "react-router-dom";
import "../styles/Bread.css";


const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const usernameGet = JSON.stringify(user).slice(1,-1);
  const [email, setEmail] = useState("");
  
  useEffect(() => {
    getEmail();
  }, []);

  const getEmail = () =>{
    Axios.post("http://localhost:8000/profile", {
      username: usernameGet,
    })
    .then((response) => {
      console.log(response);
      if(response.data.code == 200){
        const email = response.data.emailData;
        setEmail(email);
      }
      else{
         console.log("Their was an error retreiving the email");
      }
      
    });
  };
  

  return (
    <div className='Profile'>
      <Nav />
      <span className='notbread'><Link to='/' class='bread'>
          Home
        </Link> | My Profile</span>
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
        <label>{email}</label>
      </div>
    </div>
  );
};

export default Profile;
