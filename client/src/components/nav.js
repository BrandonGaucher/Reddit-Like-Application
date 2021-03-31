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
            <span className='logo'>
              <h1>LOGO</h1>
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
