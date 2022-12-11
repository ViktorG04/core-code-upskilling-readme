import React from "react";
import { NavLink } from "react-router-dom";

const Navigate = () => {
  return (
    <div className="navigate-container">
      <ul>
        <li>
          <NavLink to="/users" className="link-css">
            Users
          </NavLink>
          <p>Information about api Users</p>
        </li>
        <li>
          <NavLink to="/photos" className="link-css">
            Photos
          </NavLink>
          <p>Information about api Photos</p>
        </li>
        <li>
          <NavLink to="/posts" className="link-css">
            Posts
          </NavLink>
          <p>Information about api Posts</p>
        </li>
      </ul>
    </div>
  );
};

export default Navigate;
