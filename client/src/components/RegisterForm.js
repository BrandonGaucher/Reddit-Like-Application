import React, {useState} from 'react'
import Axios from 'axios'

const RegisterForm = () => {

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const reg = () => {
        Axios.post('http://localhost:8000/register', 
        {username: usernameReg, 
        password: passwordReg
    }).then((response)=> {
        console.log(response);
    })
    };

    return(
<div className="registration">
    <h1>Registration</h1>
    <label>Username</label>
    <input type="text" onChange={(e)=> {setUsernameReg(e.target.value)}}/>
    <label>Password</label>
    <input type="password" onChange={(e)=> {setPasswordReg(e.target.value)}}/>
    <button onClick={reg}>Register</button>
</div>
    );
}

export default RegisterForm;