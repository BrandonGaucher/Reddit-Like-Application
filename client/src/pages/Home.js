import React from "react";

//page components
import Favourites from '../components/favourites'

import Feed from "../components/Feed";



const Home = () => {
  return (
    <div className='home'>
      <Feed />
    <Favourites />
    </div>
  );
};

export default Home;
