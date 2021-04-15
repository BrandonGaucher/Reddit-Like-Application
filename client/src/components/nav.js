import React, { useContext } from "react";
import "../styles/Nav.css";

//router
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

//get the current user

const Nav = () => {
  const {user, setUser} = useContext(UserContext);
  return (
    <>
      <div className='nav'>
        <div className={"navbar"}>
          <div className='list'>
          <span id="searchArea">
              <input type="text" name="search" id="filter" size="50" placeholder="Empty search for all entries"></input>
              <input type="button" value="Search" id="searchData"></input>
            </span>
            <span className='user'>
              
              <h1>{user}</h1>
            </span>
            <span className='left'>
              <ul>
                <li className='one'>
                  <Link to='/' className='nav-a'>
                    HOME
                  </Link>
                </li>
                <li className='two'>
                  <a className='nav-a' href=''>
                    FORUMS
                  </a>
                </li>
                <li className='three'>
                  <a className='nav-a' href=''>
                    ABOUT
                  </a>
                </li>

                <hr className='nav-hr' />
              </ul>
            </span>
            <span className='right'>
              <Link to='/login' id='btn' className='nav-a'>
                Sign up
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
