import React, { useContext, useState } from "react";
import "../styles/Nav.css";
import Axios from "axios";
//router
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

//get the current user

const Nav = () => {
  const [titleSearch, setTitleSearch] = useState("");

  const search = () => {
    Axios.get("http://localhost:8000/search", {
      title: titleSearch,
    })
      .then((response) => {
        const allPosts = response.data.postData;
        console.log(allPosts);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <div className='navbar'>
        <Link to='/' class='active'>
          Home
        </Link>
        <form action=''>
          <input
            id='userInput'
            type='text'
            onChange={(e) => {
              setTitleSearch(e.target.value);
            }}
            placeholder='Search..'
          ></input>
          <input id='btn-search' type='submit' placeholder='Search'></input>

          {user == "Guest" ? (
            <Link to='/register' id='btn-signup' className='nav-a'>
              Sign up
            </Link>
          ) : (
            <Link to='/profile' id='btn-signup' className='nav-a'>
              My Profile
            </Link>
          )}
            {user == "Guest" ? (
           <Link to='/login' id='btn-login' className='nav-a'>
           Login
         </Link>

        ) : (
          <button className='nav-a' id='btn-profile' onClick={
            async() => {
              setUser("Guest");
            }
          }>
            Logout
          </button>
        )}
        </form>
      </div>
    </>
  );
};

export default Nav;
