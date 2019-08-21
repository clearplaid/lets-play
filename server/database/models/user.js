const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
mongoose.promise = Promise

// define user schema
const userSchema = new Schema({
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
  // userProfile: { type: Schema.Types.ObjectId, ref: 'Profile' }
});

// define user schema methods
userSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
}

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
  if (!this.password) {
    console.log('models/user.js =======NO PASSWORD PROVIDED=======')
    next()
  } else {
    console.log('models/user.js hashPassword in pre save');
    
    this.password = this.hashPassword(this.password)
    next()
  }
})

const User = mongoose.model("User", userSchema);

module.exports = User;