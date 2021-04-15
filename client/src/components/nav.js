import React from "react";
import "../styles/Nav.css";

//router
import { Link } from "react-router-dom";

const Nav = () => {
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
              <h1>User's Name Goes Here</h1>
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
                <li className='four'>
                <Link to='/profile' className='nav-a' href=''>
                  MY PROFILE
                  </Link>
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
