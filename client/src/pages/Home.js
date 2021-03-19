import React from 'react'

//page components
import Nav from '../components/nav'
import Feed from '../components/Feed'

const Home = () =>{

    return(
<div className="home">
<Nav />
<Feed />
</div>
    );
}

export default Home;