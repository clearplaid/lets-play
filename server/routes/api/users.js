const router = require("express").Router();
const usersController = require("../../database/controllers/usersController");

console.log("User says what?")
// Matches with "/api/users/signup"
router.route("/signup")
  // save a new user to the database
  .post(usersController.create);

// Matches with "/api/users/login"
router.route("/login")
  // save a new user to the database
  .post(usersController.findOne);

// Matches with "/api/users"
router.route("/")
// return all users
.get(usersController.findAll)
// save a new user to the database
.post(usersController.create);

// Matches with "/api/users/:id"
router.route("/:id")
  .get(usersController.findById)
  // delete a user from the database by DB id
  .delete(usersController.remove);

router.route("/logIn")


module.exports = router;