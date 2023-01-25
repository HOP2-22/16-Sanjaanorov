const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comment_schema = new Schema({
  comment: { type: String, maxlLength: 1000, minLength: 2, required: true },
  postID: { type: String, maxlLength: 1000, minLength: 2, required: true },
  ownerID: { type: String, maxlLength: 1000, minLength: 2, required: true },
});
const Comment = mongoose.model("comments", Comment_schema);

module.exports = Comment;
