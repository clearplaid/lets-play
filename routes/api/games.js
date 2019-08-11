const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");

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

module.exports = router;