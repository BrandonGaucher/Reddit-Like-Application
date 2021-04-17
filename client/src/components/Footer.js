import React, { useContext } from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

const Footer = () => {
  const { user, setUser } = useContext(UserContext);

  var var1 = setInterval(timer1, 1000);
  function timer1() {
    var d = new Date();
    document.getElementById("time_one").innerHTML = d.toLocaleTimeString();
}

  return (
    <div className="footer">
       <p className='time' id="time_one"></p>
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
