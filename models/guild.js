const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guildSchema = new Schema({
  guild_name: {
    type: String,
    required: true
  },
  created_by: { type: Schema.Types.ObjectId, ref: 'User' },
  member_names: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  description: String,
  image: String,
  liked_games: [{ type: Schema.Types.ObjectId, ref: 'Game' }],
  mechanics_liked: [String],
  categories_liked: [String],
  guild_messages: [{ type: Schema.Types.ObjectId, ref: 'GuildMessage' }],
});

const Guild = mongoose.model("Guild", guildSchema);

module.exports = Guild;