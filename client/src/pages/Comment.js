import React from "react";
import "../styles/Comment.css";
import Nav from "../components/nav";
//import components
import CommentForm from "../components/CommentForm";

const Comment = () => {
  return (
    <div className='Comment'>
      <Nav />
      <CommentForm />
    </div>
  );
};

export default Comment;
