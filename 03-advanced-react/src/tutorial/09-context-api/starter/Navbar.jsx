import React, { useState } from "react";
import NavLinks from "./Navlinks";
function Navbar() {
  const [user, setUser] = useState({ name: "kanishk" });

  const logout = () => {
    setUser(null);
  };
  return (
    <nav className="navbar">
      <h5>Content API</h5>
      {/* passing down some props */}
      <NavLinks user={user} logout={logout}></NavLinks>
    </nav>
  );
}

export default Navbar;
