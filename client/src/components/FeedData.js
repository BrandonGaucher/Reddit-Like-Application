import React from "react";

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

  return <>{displayPosts(props)}</>;
};
export default FeedData;
