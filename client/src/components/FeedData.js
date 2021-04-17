import React from "react";
import { Link } from "react-router-dom";

const FeedData = (props) => {
  const displayPosts = (props) => {
    const { posts } = props;

    if (posts.length > 0) {
      return posts.map((post, index) => {
        console.log(post);
        return (
          <div className='Posting' key={post._id}>
            <h2 className='postTitle'>{post.title}</h2>
            <h4 className='poster'>Posted by: {post.username}</h4>
            <Link to='/comment' className='comment'>
              Comment
            </Link>
            <h4 className='poster'>Category: {post.category}</h4>

            <p className='desc'>{post.description}</p>
          </div>
        );
      });
    } else {
      return (
        <div className='Posting'>
          <h2 className='postTitle'> There are no Posts yet...</h2>
        </div>
      );
    }
  };

  return <div className='feed'>{displayPosts(props)}</div>;
};
export default FeedData;
