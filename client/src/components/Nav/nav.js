import React from "react";
import "./nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg flex-column">
      
      <a className="navbar-brand d-flex justify-content-center" href="/">
        <h1>Peoples with Meeples</h1>
      </a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsingNavbar" aria-controls="collapsingNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-text">Where do you want to go?</span>
      </button>
      <div className="navbar-collapse collapse justify-content-center" id="collapsingNavbar">
        <ul className="navbar-nav list-inline mr-auto mt-2 mt-lg-0">
          <li className="list-inline-item active"><a href="/" className="nav-link">Home<span class="sr-only">Home</span></a></li>
          <li className="list-inline-item"><a href="/signup" className="nav-link">Sign Up</a></li>
          <li className="list-inline-item"><a href="/login" className="nav-link">Log In</a></li>
          <li className="list-inline-item"><a href="/profile" className="nav-link">Profile</a></li>
          <li className="list-inline-item"><a href="/guild" className="nav-link">Guild</a></li>
          <li className="list-inline-item"><a href="/search" className="nav-link">Search</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;