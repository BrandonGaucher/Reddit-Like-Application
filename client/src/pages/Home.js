import React from "react";

import Categories from "../components/Categories";
import Nav from "../components/nav";
//page components

import Feed from "../components/Feed";

import SubmitPost from "../components/SubmitPost";

const Home = () => {
  return (
    <div className='home'>
      <Nav />
      <Feed />

      <Categories />
      {/* <SubmitPost /> */}
    </div>
  );
};

export default Home;
