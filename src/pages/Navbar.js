import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="logo">Travel Planner</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
      </div>
    </nav>
  );
}

export default Navbar;
