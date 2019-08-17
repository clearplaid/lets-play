const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define user schema
const profileSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User' },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userImage: String,
  email: { type: String, required: true },
  username: { type: String, unique: false, required: true },
  password: { type: String, unique: false, required: true },
  description: String,
  games_owned: [String],
  games_wanted: [String],
  friend_list: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  guilds_created: [{ type: Schema.Types.ObjectId, ref: 'Guild' }],
  guilds_member: [{ type: Schema.Types.ObjectId, ref: 'Guild' }],
  friend_messages: [{ type: Schema.Types.ObjectId, ref: 'FriendMessage' }],
  guild_messages: [{ type: Schema.Types.ObjectId, ref: 'GuildMessage' }]
});



const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;