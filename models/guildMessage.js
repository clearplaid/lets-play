const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guildMessageSchema = new Schema({
  created_on: { type: Date, default: Date.now },
  body: { type: String, required: true },
  guild: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Guild'
  },
  author: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
});

const GuildMessage = mongoose.model("GuildMessage", guildMessageSchema);

module.exports = GuildMessage;