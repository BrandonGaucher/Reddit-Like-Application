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
  var var1 = setInterval(timer1, 1000);
  function timer1() {
    var d = new Date();
    document.getElementById("time_one").innerHTML = d.toLocaleTimeString();
  }
  return (
    <>
      <div className='navbar'>
        <Link to='/' class='active'>
          Home
        </Link>
        <p id='time_one'></p>
        <input
          type='text'
          onClick='search_func()'
          placeholder='Search..'
        ></input>
        {user == "Guest" ? (
          <Link to='/register' id='btn-signup' className='nav-a'>
            Sign up
          </Link>
        ) : (
          <Link to='/profile' id='btn-profile' className='nav-a'>
            My Profile
          </Link>
        )}
      </div>
    </>
  );
};

export default Nav;
