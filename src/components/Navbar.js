import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">Shubham</h2>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;