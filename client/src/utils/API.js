import axios from "axios";

export default {
  // Gets all Games
  getGames: function() {
    return axios.get("/api/games");
  },
  // finds all Games with searched title from bga Games
  searchGames: function (title) {
    return axios.post("/search", {title: title});
  },
  // Saves a Game to the database
  saveGame: function(gameData) {
    return axios.post("/api/games", gameData);
  },
  // Deletes the Game with the given id
  deleteGame: function(id) {
    return axios.delete("/api/games/" + id);
  },
  // get popular games to render on home page
  getPopular: function (popular) {
    return axios.post("/search/popular", popular);
  },
  userSignup: function (user) {
    console.log("axios sign up user from api function")
    console.log(user);
    return axios.post("/api/users/signup/", user);
  },
  userLogIn: function (user) {
    console.log("axios log in user from api function")
    console.log(user);
    return axios.post("/api/users/login/", user);
  },
  getCurrentUser: function (username) {
    console.log("axios current user from api function")
    console.log(username);
    return axios.put("/api/users", username)
  },
  getUser: function (username) {
    console.log("axios get user from api function")
    console.log(username);
    return axios.get("/api/users", username)
  },
  getGuilds: function () {
    return axios.post("/api/guilds");
  }
  
};