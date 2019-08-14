const router = require("express").Router();
const usersController = require("../../controllers/usersController");

console.log("User says what?")
// Matches with "/api/users"
router.route("/")
  // return all saved users as JSON
  .get(usersController.findAll)
  // save a new user to the database
  .post(usersController.create);

// Matches with "/api/users/:id"
router.route("/:id")
  .get(usersController.findById)
  // delete a user from the database by DB id
  .delete(usersController.remove);

module.exports = router;