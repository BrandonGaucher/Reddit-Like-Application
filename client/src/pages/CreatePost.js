import React from "react";
import "../styles/CreateSubmitPost.css";

//import components
import CreatePostForm from "../components/CreatePostForm";

const CreatePost = () => {
  return (
    <div className='CreatePost'>
      <CreatePostForm />
    </div>
  );
};

export default CreatePost;