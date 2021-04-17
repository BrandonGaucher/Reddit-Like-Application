import React, { useContext, useState } from "react";
import Axios from "axios";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/ProfileUpdate.css";
import { UserContext } from "./UserContext";

const ProfileUpdate = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const{ user, setUser } = useContext(UserContext);

  const updateUsername = () => {
    Axios.post("http://localhost:8000/updateUsername", {
      OldUsername: user,
      NewUsername: usernameReg,
    }).then((response) => {
      console.log(response);
      if (response.data.correct) {
        alert("Username Updated Successfully!");
        setUser(usernameReg);
        document.getElementById("upd-username").reset();
      } else {
        alert("There was a problem during update");
      }
    });
  };

  const updateEmail = () => {
    Axios.post("http://localhost:8000/updateEmail", {
      username: user,
      NewEmail: emailReg,
    }).then((response) => {
      console.log(response);
      if (response.data.correct) {
        alert("Email Updated Successfully!");
        document.getElementById("upd-email").reset();
      } else {
        alert("There was a problem during update");
      }
    });
  };

  const updatePassword = () => {
    Axios.post("http://localhost:8000/updatePassword", {
      username: user,
      Newpassword: passwordReg,
    }).then((response) => {
      console.log(response);
      if (response.data.correct) {
        alert("Password Updated Successfully!");
        document.getElementById("upd-password").reset();
      } else {
        alert("There was a problem during update");
      }
    });
  };


  return (
    <div className='Register'>
      <div className='box'>
        <h2>Update Profile</h2>
        <br></br>
        <form id='upd-user' className='upd-field' onSubmit={handleSubmit(updateUsername)}>
          <label>New Username</label>
          <input
            {...register("username", {
              //required: true,
              pattern: /^[a-zA-Z0-9]+$/,
              maxLength: 21,
              minLength: 4,
            })}
            className='input'
            onChange={(e) => {
              setUsernameReg(e.target.value);
            }}
            placeholder='Username...'
            type='text'
          />
          <div>
            {errors.username && errors.username.type === "required" && (
              <span className='alert'>This field is required</span>
            )}
            {errors.username && errors.username.type === "pattern" && (
              <span className='alert'>
                Username can only contain letters and numbers
              </span>
            )}
            {errors.username && errors.username.type === "minLength" && (
              <span className='alert'>
                Username must contain at least 4 letters
              </span>
            )}
            {errors.username && errors.username.type === "maxLength" && (
              <span className='alert'>
                Username can only contain a max of 20 letters
              </span>
            )}
          </div>
          <input type='submit' className='button' value='Submit Username'/>
          </form>
          <form id='upd-email' className='upd-field' onSubmit={handleSubmit(updateEmail)}>

          <label>New Email</label>
          <input
            {...register("email", {
             // required: true,
            })}
            className='input'
            onChange={(e) => {
              setEmailReg(e.target.value);
            }}
            type='email'
            placeholder='Email...'
          />
          <div>
            {errors.email && errors.email.type === "required" && (
              <span className='alert'>This field is required</span>
            )}
          </div>
          <input type='submit' className='button' value='Submit Email'/>
          </form>
          <form id='upd-password' className='upd-field' onSubmit={handleSubmit(updatePassword)}>
          <label>New Password</label>
          <input
            className='input'
            {...register("password", {
             // required: true,
              minLength: 6,
              maxLength: 20,
            })}
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
            type='password'
            placeholder='Password...'
          />
          <input type='submit' className='button' value='Submit Password'/>
            </form>
      </div>
    </div>
  );
};

export default ProfileUpdate;
