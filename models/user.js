const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  description: String,
  image: String,
  games_owned: [String],
  games_wanted: [String],
  messages: []
});

const User = mongoose.model("User", userSchema);

module.exports = User;