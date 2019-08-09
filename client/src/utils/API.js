import axios from "axios";

const API_KEY = process.env.REACT_APP_BGA_API_KEY;

export default {
  // Gets all Games
  getGames: function() {
    return axios.get("/api/games");
  },
  // finds all Games with searched title from google Games
  searchGames: function (title) {
    // let gameTitle = inputTitle.replace(/\s/g, "+");
    return axios.get("https://www.boardgameatlas.com/api/search?name=" + title + "&client_id=" + API_KEY);
  },
  // Saves a Game to the database
  saveGame: function(gameData) {
    return axios.post("/api/games", gameData);
  },
  // Deletes the Game with the given id
  deleteGame: function(id) {
    return axios.delete("/api/games/" + id);
  }
};