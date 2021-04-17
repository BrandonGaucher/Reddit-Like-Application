import React, { useState } from "react";
import Axios from "axios";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/Bread.css";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const reg = () => {
    Axios.post("http://localhost:8000/register", {
      username: usernameReg,
      password: passwordReg,
      email: emailReg,
    }).then((response) => {
      console.log(response);
      if(response.data.correct){
        alert("Registered Successfully!");
      }
      else{
        alert("There was a problem with registration");
      }
    });
  };

  return (
    <div className='Register'>
       <span className='notbread'><Link to='/' class='bread'>
          Home
        </Link> | Register</span>
      <div className='box'>
        <h2>Register</h2>
        <br></br>
        <form onSubmit={handleSubmit(reg)}>
          <label>Username</label>
          <input
            {...register("username", {
              required: true,
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
          <label>Email</label>
          <input
            {...register("email", {
              required: true,
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
          <label>Password</label>
          <input
            className='input'
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
            })}
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
            type='password'
            placeholder='Password...'
          />
          <div>
            {errors.password && errors.password.type === "minLength" && (
              <span className='alert'>
                Password must be at least 6 characters
              </span>
            )}
            {errors.password && errors.password.type === "maxLength" && (
              <span className='alert'>
                Password must be less than 20 characters
              </span>
            )}

            {errors.password && errors.password.type === "required" && (
              <span className='alert'>This field is required</span>
            )}
          </div>
          <label>Re-enter password</label>
          <input
            className='input'
            {...register("password_check", {
              required: true,
              minLength: 6,
              maxLength: 20,
              validate: (value) => value === passwordReg,
            })}
            type='password'
            placeholder='Password...'
          />
          <div>
            {errors.password_check &&
              errors.password_check.type === "required" && (
                <span className='alert'>This field is required</span>
              )}
            {errors.password_check &&
              errors.password_check.type === "validate" && (
                <span className='alert'>The passwords do not match</span>
              )}
          </div>

          <input className='button' type='submit' />
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
