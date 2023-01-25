const mongoose = require("mongoose");
const CommentsSchema = new mongoose.Schema({
  text: { type: String },
});
const User = mongoose.model("comments", CommentsSchema);
module.exports = Comments;
