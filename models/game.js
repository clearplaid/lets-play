const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  id: String,
  name: { type: String, required: true },
  other_names: [String],
  min_players: Number,
  max_players: Number,
  min_playtime: Number,
  max_playtime: Number,
  min_age: Number,
  description: String,
  thumbnail: String,
  image: String,
  link: String,
  mechanics: [String],
  category: [String]
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;