const router = require("express").Router();
const usersController = require("../../database/controllers/usersController");
const passport = require("passport");
// const LocalStrategy = require('passport-local').Strategy

console.log("User says what?")

// Matches with "/api/users"
router.route("/")
// return all users
.get(usersController.findAll)

router.route("/profile")
// return all users
  .get(usersController.findOne)

// Matches with "/api/users/:id"
router.route("/:id")
  .get(usersController.findById)
  // delete a user from the database by DB id
  .delete(usersController.remove);

module.exports = router;