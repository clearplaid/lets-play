import axios from "axios";

export default {
  // Gets all Games
  getGames: function() {
    return axios.get("/api/games");
  },
  // finds all Games with searched title from bga Games
  searchGames: function (title) {
    return axios.post("/api/games", {title: title});
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