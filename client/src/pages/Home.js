import React from "react";

//page components
import Favourites from '../components/favourites'

import Feed from "../components/Feed";

import SubmitPost from "../components/SubmitPost";


const Home = () => {
  return (
    <div className='home'>
      <Feed />
    <Favourites />
    <SubmitPost />
    </div>
  );
};

export default Home;
