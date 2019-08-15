const router = require("express").Router();
const guildMessagesController = require("../../database/controllers/guildMessagesController");


// Matches with "/api/guildmessages"
router.route("/")
  // return all saved guild messages as JSON
  .get(guildMessagesController.findAll)
  // save a new guild message to the database
  .post(guildMessagesController.create);

// Matches with "/api/guildmessages/:id"
router.route("/:id")
  .get(guildMessagesController.findById)
  // delete a guild message from the database by DB id
  .delete(guildMessagesController.remove);

module.exports = router;