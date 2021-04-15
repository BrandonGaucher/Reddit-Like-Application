import React, { useContext } from "react";
import "../styles/Nav.css";

//router
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

//get the current user

const Nav = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <div className='navbar'>
        <Link to='/' class='active'>
          Home
        </Link>
        <input
          type='text'
          onClick='search_func()'
          placeholder='Search..'
        ></input>
        <Link to='/login' id='btn-login' className='nav-a'>
          Login
        </Link>
        <Link to='/register' id='btn-signup' className='nav-a'>
          Sign up
        </Link>
      </div>
    </>
  );
};

export default Nav;
