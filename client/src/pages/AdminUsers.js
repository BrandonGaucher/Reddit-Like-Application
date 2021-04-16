import React, { useContext, useState, useEffect, props } from "react";
import UserData from "../components/UserData";
import "../styles/Admin.css";
import Axios from "axios";
import { Link } from "react-router-dom";
const AdminUsers = () => {
  const [users, getUsers] = useState("");

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    Axios.get("http://localhost:8000/userlist")
      .then((response) => {
        const allUsers = response.data.userData;
        getUsers(allUsers);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <>
      <div class='sidenav'>
        <Link to='/admin'>Users</Link>
        <Link to='/admin/posts'>Posts</Link>
      </div>
      <div class='main'>
        <h1>Admin Dashboard</h1>
        <h2>All Users</h2>
        <UserData users={users} />
      </div>
    </>
  );
};

export default AdminUsers;
