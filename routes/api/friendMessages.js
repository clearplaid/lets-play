const router = require("express").Router();
const friendMessagesController = require("../../controllers/friendMessagesController");


// Matches with "/api/friendmessages"
router.route("/")
  // return all saved friend messages as JSON
  .get(friendMessagesController.findAll)
  // save a new friend message to the database
  .post(friendMessagesController.create);

// Matches with "/api/friendmessages/:id"
router.route("/:id")
  .get(friendMessagesController.findById)
  // delete a friend message from the database by DB id
  .delete(friendMessagesController.remove);

module.exports = router;