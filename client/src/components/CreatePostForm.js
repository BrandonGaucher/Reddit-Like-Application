import React, { useState } from "react";
import Axios from "axios";

const CreatePostForm = () => {
  const [titleReg, setTitleReg] = useState("");
  const [textReg, setTextReg] = useState("");
  const reg = () => {
    Axios.post("http://localhost:8000/createpost", {
      title: titleReg,
      text: textReg,
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