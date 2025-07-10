import React from "react";

function UserContainer({ user, logout }) {
  return (
    <div className="user-container">
      <p>Hello There, {user?.name.toUpperCase()}</p>
      <button className="btn" onClick={logout}>Logout</button>
    </div>
  );
}

export default UserContainer;
