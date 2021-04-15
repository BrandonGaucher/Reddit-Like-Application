import React, {useContext, useState } from "react";
import Axios from "axios";
import "../styles/CreateSubmitPost.css";
import { UserContext } from "./UserContext";

const CreatePostForm = () => {
  const [titleReg, setTitleReg] = useState("");
  const [categoryReg, setCategoryReg] = useState("");
  const [textReg, setTextReg] = useState("");
  const [userReg, setUserReg] = useState("");
  const {user, setUser} = useContext(UserContext);
  var username = JSON.stringify(user);
  username = username.slice(1, -1);
  //console.log(username);
  const reg = () => {
    setUserReg(username);
    Axios.post("http://localhost:8000/createpost", {
      title: titleReg,
      category: categoryReg,
      text: textReg,
      user: userReg,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className='CreatePost'>
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
          <select
            onChange={(e) => {
              setCategoryReg(e.target.value);
            }}
          >
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
        />
        <button className='button' onClick={reg}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreatePostForm;
