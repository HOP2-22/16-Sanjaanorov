const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  firstname: { type: String },
  age: { type: Number },
});
const User = mongoose.model("users", UserSchema);
module.exports = User;
