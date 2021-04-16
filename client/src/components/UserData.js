import Axios from "axios";
import React from "react";

const UserData = (props) => {
  const disable = (e) => {
    const userDisable = e;
    Axios.post("http://localhost:8000/disableUser", {
      userToDisable: userDisable,
    }).then((response) => {
      alert("Disabled " + userDisable + "!");
      console.log(response);
    });
  };

  const enable = (e) => {
    const userEnable = e;
    Axios.post("http://localhost:8000/enableUser", {
      userToEnable: userEnable,
    }).then((response) => {
      alert("Enable " + userEnable + "!");
      console.log(response);
    });
  };

  const displayUsers = (props) => {
    const { users } = props;

    if (users.length > 0) {
      return users.map((user, index) => {
        console.log(user);
        return (
          <tr className='user' key={user.username}>
            <td classNam='username'> {user.username}</td>
            <td> {user.email}</td>
            <td> {user.permissions}</td>
            <td>
              {" "}
              <button
                onClick={(e) => {
                  disable(e.target.value);
                }}
                value={user.username}
              >
                Disable
              </button>{" "}
              <button
                onClick={(e) => {
                  enable(e.target.value);
                }}
                value={user.username}
              >
                Enable
              </button>
            </td>
          </tr>
        );
      });
    } else {
      return <h3> There are no Users yet</h3>;
    }
  };

  return (
    <div>
      <table>
        <th>Username:</th>
        <th>Email</th>
        <th>Permissions</th>
        <th>Options</th>
        {displayUsers(props)}
      </table>
    </div>
  );
};

export default UserData;
