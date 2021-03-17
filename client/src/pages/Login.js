import React from 'react'
import '../styles/Login.css'

const Login = () => {
    return (
        <div className="RegisterLogin">
            <div className="Login">
                <div className="box">
                    <h2>Login</h2>
                    <br></br>
                    <label>Username</label>
                    <input className="input" type="text" placeholder="Username..." />
                    <label>Password • <a className="forgotPass" href="">Forgot password?</a></label>
                    <input className="input" type="password" placeholder="Password..." />
                    <a className="button" href="">Login</a>
                </div>
            </div>
            <div className="Register">
                <div className="box">
                    <h2>Register</h2>
                    <br></br>
                    <label>Username</label>
                    <input className="input" type="text" placeholder="Username..." />
                    <label>Password</label>
                    <input className="input" type="password" placeholder="Password..." />
                    <a className="button" href="">Register</a>
                </div>
            </div>
        </div>
    );
}

export default Login;