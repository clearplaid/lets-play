const router = require("express").Router();
const profileController = require("../../database/controllers/profileController");

// Matches with "/api/profile"
router.route("/")
// return 1 profile
.get(profileController.findOne)
// save a new profile to the database
.post(profileController.create);


// Matches with "/api/profile/:id"
router.route("/:id")
  .get(profileController.findById)
  // delete a user profile from the database by DB id
  .delete(profileController.remove);


module.exports = router;