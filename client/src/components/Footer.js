import React, { useContext } from "react";
import "../styles/Footer.css";


const Footer = () => {
    return (
        <div className="footer">
            <ul id='list'>
            <li className='one'>
                  <a className='foo' href=''>
                    About
                  </a>
                </li>
                <li className='two'>
                  <a className='foo' href=''>
                   Help
                  </a>
                </li>
                <li className='three'>
                  <a className='foo' href=''>
                    Apps and Tools
                  </a>
                </li>
                <li className='four'>
                  <a className='foo' href=''>
                    Privacy Policy
                  </a>
                </li>
            </ul>
        </div>
    )
}
export default Footer;
