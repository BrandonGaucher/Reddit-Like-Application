import React from 'react'
import  '../styles/Nav.css'
const Nav = () =>{
   
    
    
    return(
        <>
        <div className="nav">
        <div className={'navbar'}>
            <div className="list">
            <span className="logo">
                <h1>LOGO</h1>
            </span>
             <span className="left">
                 <ul>
             <li className="one"><a className="nav-a" href="">FORUM</a></li> 
             <li className="two"><a className="nav-a" href="">SETTINGS</a></li>
               <li className="three"><a className="nav-a" href="">ABOUT US</a></li>
                <li className="four"><a className="nav-a" href="">NOTIFICATIONS</a></li>
                <hr className="nav-hr" />
                </ul>
               
                </span>
                <span className="right">
                <a href="" id="btn" className="nav-a">LOGIN</a>
                </span>
            </div>
        </div>
        </div>
        </>
    );
}

export default Nav;