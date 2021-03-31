import React from 'react'
import  '../styles/Feed.css'

//router
import {Link} from 'react-router-dom';
const Feed = () =>{
   
    
    
    return(
        <>
        <div className="Posting">
            <h2 className="postTitle">Title of feed post</h2>
            <h4 className="poster">Posted by: user at timestamp</h4>
            <p className="desc">This is where the description will be</p>
        </div>
        
        </>
    );
}

export default Feed;