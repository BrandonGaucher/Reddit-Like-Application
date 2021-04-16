import React, { useContext, useState, useEffect, props } from "react";
import "../styles/Feed.css";
import Axios from "axios";
import FeedData from "../components/FeedData";

//router
import { Link } from "react-router-dom";
const Feed = () => {
  const [posts, getPosts] = useState("");

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = () => {
    Axios.get("http://localhost:8000/postlist")
      .then((response) => {
        const allPosts = response.data.postData;
        getPosts(allPosts);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <>
      {" "}
      <FeedData posts={posts} />
    </>
  );
};

export default Feed;
