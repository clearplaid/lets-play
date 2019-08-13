import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary p-4">
      <div className="container">
        <a className="navbar-brand" href="/">
        <h1>Meeples Meet-Up</h1>
        </a>
        <div className="links">
          <a href="/" className="link">Home</a>
          <a href="/signup" className="link">Sign Up</a>
          <a href="/profile" className="link">Profile</a>
          <a href="/guild" className="link">Guild</a>
          <a href="/search"className="link">Search</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;