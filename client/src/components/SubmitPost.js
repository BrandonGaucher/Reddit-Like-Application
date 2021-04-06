import React, { useState } from "react";
import Axios from "axios";
import "../styles/CreateSubmitPost.css";

import { Link } from "react-router-dom";

const Submit = () => {

return (
    <div className="Submit">
    <Link to='/createpost' className='create'>Submit a new post</Link>
  </div>
);
};
export default Submit;