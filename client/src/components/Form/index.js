import React from "react";
import "./style.css";
// This file exports the search form for finding the games we want from google books

function Form(props) {
  return(
    <div id="search">
      <div className="row">
        <h2>Game Search</h2>
      </div>
      <br></br>
      <div className="row">
        <form id="searchGames">
            <input
              type="text"
              name="title"
              id="title"
              form="searchGames"
              onChange={(event) => props.handleChange(event)}
              placeholder="Game Name" required />
            <button
              type="submit"
              onClick={(event) => props.handleSearch(event)}>Search</button>
          </form>
        </div>
    </div>
  )
}
export default Form;