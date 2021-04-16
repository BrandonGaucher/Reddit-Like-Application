import Axios from "axios";
import React from "react";

const PostData = (props) => {
  const remove = (e) => {
    const postToRemove = e;
    Axios.post("http://localhost:8000/removePost", {
      postToRemove: postToRemove,
    }).then((response) => {
      alert("Removed post: " + postToRemove + "!");
      window.location.reload();
    });
  };

  const edit = (e) => {
    // const postToEdit = e;
    // Axios.post("http://localhost:8000/enableUser", {
    //   userToEnable: userEnable,
    // }).then((response) => {
    //   alert("Enable " + userEnable + "!");
    //   console.log(response);
    // });
  };
  const displayPosts = (props) => {
    const { posts } = props;

    if (posts.length > 0) {
      return posts.map((post, index) => {
        return (
          <tr className='post' key={post._id}>
            <td className='title'> {post.title}</td>
            <td> {post.description}</td>
            <td> {post.category}</td>
            <td> {post.post_date}</td>
            <td> {post.username}</td>
            <td>
              {" "}
              <button
                onClick={(e) => {
                  remove(e.target.value);
                }}
                value={post.id}
              >
                Remove
              </button>
              {"  "}
              <button
                onClick={(e) => {
                  edit(e.target.value);
                }}
                value={post._id}
              >
                Edit
              </button>
            </td>
          </tr>
        );
      });
    } else {
      return <h3> There are no Posts yet</h3>;
    }
  };

  return (
    <div>
      <table>
        <th>Title</th>
        <th>Description</th>
        <th>Category</th>
        <th>Post Date</th>
        <th>User</th>
        <th>Edit / Remove</th>
        {displayPosts(props)}
      </table>
    </div>
  );
};

export default PostData;
