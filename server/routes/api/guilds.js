const router = require("express").Router();
const guildsController = require("../../database/controllers/guildsController");


// Matches with "/api/guilds"
router.route("/")
  // return all saved guilds as JSON
  .get(guildsController.findAll)
  // save a new guild to the database
  .post(guildsController.create);

// Matches with "/api/guilds/:id"
router.route("/:id")
  .get(guildsController.findById)
  // delete a guild from the database by DB id
  .delete(guildsController.remove);

module.exports = router;