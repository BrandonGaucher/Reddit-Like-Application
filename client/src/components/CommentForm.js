import React, { useContext, useState } from "react";
import Axios from "axios";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";
import "../styles/Bread.css";
import "../styles/Comment.css";

const CommentPost = () => {

const [textReg, setTextReg] = useState("");
const [userReg, setUserReg] = useState("");
const { user, setUser } = useContext(UserContext);
const username = JSON.stringify(user).slice(1,-1);

const reg = () => {
  document.getElementById("postForm").reset();
  Axios.post("http://localhost:8000/comment", {
    text: textReg,
    user: username,
  }).then((response) => {
    console.log(response);
  });
};

return (
    <div className='Comment'>
      <span className='notbread'><Link to='/' class='bread'>
          Home
        </Link> | Comment</span>
        <form id="postForm"onSubmit={
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(username == "Guest"){
          alert("You have to sign in before commenting");
        }
        else{
          reg();
        }
      }
    }>
    </form>
        <div className='box'>
          <h2>Comment</h2>
          <label>Speaking as: {user}</label>
          <textarea
            className='commentbox'
            onChange={(e) => {
              setTextReg(e.target.value);
            }}
            type='text'
            placeholder='Text...'
            required
          />
           <input type="submit" value="Submit" className='button'/>
        </div>
    </div>
  );
}

export default CommentPost;
