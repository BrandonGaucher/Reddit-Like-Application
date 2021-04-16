import React, { useState, useEffect } from "react";
import Nav from "../components/nav";
import { useParams } from "react-router";
import Axios from "axios";
import FeedData from "../components/FeedData";
import Categories from "../components/Categories";

const Category = () => {
  const { id } = useParams();
  const [posts, getPosts] = useState("");
  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = () => {
    Axios.post("http://localhost:8000/categorydata", {
      category: id,
    })
      .then((response) => {
        console.log(response);
        const allPosts = response.data.postData;
        getPosts(allPosts);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <>
      <Nav />
      <h1>Category: {id}</h1>
      <div className='row'>
        <div className='column-1'></div>
        <div className='column-2'>
          <FeedData posts={posts} />
        </div>
      </div>
    </>
  );
};

export default Category;
