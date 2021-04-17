import React from "react";

import Categories from "../components/Categories";
import Nav from "../components/nav";
//page components
import "../styles/Home.css";
import Feed from "../components/Feed";
import Masthead from "../components/Masthead";

const Home = () => {
  return (
    <div className='home'>
      <Nav />
      <Masthead />
      <div className='row'>
        <div className='column-1'>
          <Categories />
        </div>
        <div className='column-2'>
          <Feed />
        </div>
      </div>
    </div>
  );
};

export default Home;
