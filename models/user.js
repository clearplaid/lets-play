const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: {
      first: String,
      last: String,
    },
    required: true
  },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  description: String,
  image: String,
  games_owned: [String],
  games_wanted: [String],
  friend_list: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  guilds_created: [{ type: Schema.Types.ObjectId, ref: 'Guild' }],
  guilds_member: [{ type: Schema.Types.ObjectId, ref: 'Guild' }],
  friend_messages: [{ type: Schema.Types.ObjectId, ref: 'FriendMessage' }],
  guild_messages: [{ type: Schema.Types.ObjectId, ref: 'GuildMessage' }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;