import React, { useContext } from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

const Footer = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="footer">
      <Link to='/' className='foo'>
        Home
      </Link>
      <Link to='/login' className='foo'>
        Login
        </Link>
      <Link to='/register' className='foo'>
        Sign up
        </Link>
      {user == "Guest" ? (
        <br></br>
      ) : (
        <Link to='/profile' className='foo'>
          My Profile
        </Link>
      )}
    </div>
  );
}

export default Footer;
