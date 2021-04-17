import React, {useContext, useState } from "react";
import Axios from "axios";
import "../styles/CreateSubmitPost.css";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";
import "../styles/Bread.css";

const CreatePostForm = () => {
  const [titleReg, setTitleReg] = useState("");
  const [categoryReg, setCategoryReg] = useState("");
  const [textReg, setTextReg] = useState("");
  const [userReg, setUserReg] = useState("");
  const {user, setUser} = useContext(UserContext);
  const username = JSON.stringify(user).slice(1,-1);
  const regForm = document.getElementById
  //console.log(username);

  const reg = () => {
    Axios.post("http://localhost:8000/createpost", {
      title: titleReg,
      category: categoryReg,
      text: textReg,
      user: username,
    }).then((response) => {
      console.log(response);
      document.getElementById("postForm").reset();
    });
  };

  return (
    <div className='CreatePost'>
       <span className='notbread'><Link to='/' class='bread'>
          Home
        </Link> | Create Post</span>
      <form id="postForm"onSubmit={
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(username == "Guest"){
          alert("You have to sign in before posting");
        }
        else{
          reg();
        }
      }
    }>
        <div className='box'>
          <h2>Create Post</h2>
          <br></br>
          <label>Title</label>
          <input
            className='titlebox'
            onChange={(e) => {
              setTitleReg(e.target.value);
            }}
            type='text'
            placeholder='Title...'
            required
          />
          <label>Category </label>
          <div class='custom-select'>
            <select className=""
              onChange={(e) => {
                setCategoryReg(e.target.value);
              }}
            >
              <option value="" disabled selected>Select your category</option>
              <option value='gaming'>Gaming</option>
              <option value='sports'>Sports</option>
              <option value='food'>Food</option>
              <option value='jokes'>Jokes</option>
              <option value='music'>Music</option>
            </select>
          </div>
          <br></br>
          <label>Text</label>
          <textarea
            className='textbox'
            onChange={(e) => {
              setTextReg(e.target.value);
            }}
            type='text'
            placeholder='Text...'
            required
          />
          <input type="submit" value="Submit" className='button'/>
        </div>
      </form>
    </div>
  );
};

export default CreatePostForm;
