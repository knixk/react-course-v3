import React, { useState } from "react";
import UserContainer from "./UserContainer";

function NavLinks({ user, logout }) {
  return (
    <div className="nav-container">
      <li>
        <a href="#">Home</a>
      </li>

      <li>
        <a href="#">About</a>
      </li>

      {/* This is level 2 of prop drilling */}
      <UserContainer user={user} logout={logout} />
    </div>
  );
}

export default NavLinks;
