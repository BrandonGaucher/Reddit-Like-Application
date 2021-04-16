import React, { useContext, useState, useEffect, props } from "react";
import PostData from "../components/PostData";
import "../styles/Admin.css";
import Axios from "axios";
import { Link } from "react-router-dom";
const AdminPosts = () => {
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
      <div class='sidenav'>
        <Link to='/admin'>Users</Link>
        <Link to='/admin/posts'>Posts</Link>
      </div>
      <div class='main'>
        <h1>Admin Dashboard</h1>
        <h2>All posts</h2>
        <form action=''>
          <input type='text' placeholder='Search..'></input>
          <button type='submit'>Search</button>
        </form>
        <PostData posts={posts} />
      </div>
    </>
  );
};

export default AdminPosts;
