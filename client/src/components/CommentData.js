import React from "react";

const CommentData = (props) => {
  const displayComments = (props) => {
    const { comments } = props;

    if (comments.length > 0) {
      return comments.map((comment, index) => {
        console.log(comment);
        return (
          <div className='Posting' key={comment._id}>
            <p className='poster'>Posted by: {comment.username}</p>
            <p className='desc'>{comment.description}</p>
          </div>
        );
      });
    } else {
      return (
        <div className='Posting'>
          <p> There are no Comments yet...</p>
        </div>
      );
    }
  };

  return <div className='feed'>{displayComments(props)}</div>;
};
export default CommentData;
