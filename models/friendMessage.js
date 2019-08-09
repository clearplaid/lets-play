const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const friendMessageSchema = new Schema({
  created_on: { type: Date, default: Date.now },
  body: { type: String, required: true },
  author: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
});

const FriendMessage = mongoose.model("FriendMessage", friendMessageSchema);

module.exports = FriendMessage;