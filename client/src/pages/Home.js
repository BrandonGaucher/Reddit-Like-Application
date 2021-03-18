import React from 'react'

//page components
import Nav from '../components/nav'
import Favourites from '../components/favourites'

const Home = () =>{

    return(
<div className="home">

<Nav />
<Favourites />
</div>
    );
}

export default Home;