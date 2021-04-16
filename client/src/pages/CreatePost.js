import React from "react";
import "../styles/CreateSubmitPost.css";
import Nav from "../components/nav";
//import components
import CreatePostForm from "../components/CreatePostForm";

const CreatePost = () => {
  return (
    <div className='CreatePost'>
      <Nav />
      <CreatePostForm />
    </div>
  );
};

export default CreatePost;
