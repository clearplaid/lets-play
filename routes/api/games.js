const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");
const KEY = process.env.REACT_APP_BGA_CLIENT_ID;

// Matches with "/api/games"
router.route("/")
  // return all saved games as JSON
  .get(gamesController.findAll)
  // save a new game to the database
  .post(gamesController.create);

// Matches with "/api/games/:id"
router.route("/:id")
  .get(gamesController.findById)
  // delete a game from the database by DB id
  .delete(gamesController.remove);

  // Matches with "/api/games/search"
router.route("/search")
  searchGames: (title) => {
  let gameTitle = req.body.title;
    axios.get("https://www.boardgameatlas.com/api/search?name=" + gameTitle + "&client_id=" + KEY
    ).then(
      (response) => {
          res.json(response.data.games)
      }
    ).catch(
      (err) => {
          res.json({error: error})
      });
  }
module.exports = router;