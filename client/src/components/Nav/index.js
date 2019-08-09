import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary p-4">
      <div className="container">
        <a className="navbar-brand" href="/">
        <h1>Shuffle and Shake</h1>
        </a>
        <div className="links">
          <a href="/" className="link">Search Games</a>
          <a href="/login"className="link">Log In</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;