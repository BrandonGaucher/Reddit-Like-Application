import React from "react";
import Categories from "../components/Categories";

//page components

import Feed from "../components/Feed";

import SubmitPost from "../components/SubmitPost";


const Home = () => {
  return (
    <div className='home'>
      <Feed />
    <Categories />
    {/* <SubmitPost /> */}
    </div>
  );
};

export default Home;
