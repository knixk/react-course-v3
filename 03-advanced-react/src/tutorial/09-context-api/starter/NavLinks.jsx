import React from "react";
import UserContainer from "./UserContainer";

function NavLinks() {
  return (
    <div className="nav-container">
      <li>
        <a href="#">Home</a>
      </li>

      <li>
        <a href="#">About</a>
      </li>

      <UserContainer />
    </div>
  );
}

export default NavLinks;
