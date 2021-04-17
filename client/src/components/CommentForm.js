import React, { useContext, useState } from "react";
import Axios from "axios";
import { UserContext } from "./UserContext";
import { Link, useParams } from "react-router-dom";
import "../styles/Bread.css";
import "../styles/Comment.css";

const CommentPost = () => {
  const [textReg, setTextReg] = useState("");
  const { id } = useParams();
  const { user, setUser } = useContext(UserContext);
  const username = JSON.stringify(user).slice(1, -1);

  const reg = () => {
    Axios.post("http://localhost:8000/comment", {
      username: username,
      postId: id,
      description: textReg,
    }).then((response) => {
      document.getElementById("postForm").reset();
      alert("Comment added succesfully");
      console.log(response);
    });
  };

  return (
    <div className='Comment'>
      <span className='notbread'>
        <Link to='/' class='bread'>
          Home
        </Link>{" "}
        | Comment
      </span>
      <form
        id='postForm'
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (username == "Guest") {
            alert("You have to sign in before posting");
          } else {
            reg();
          }
        }}
      >
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
          <input type='submit' value='Submit' className='button' />
        </div>
      </form>
    </div>
  );
};

export default CommentPost;
