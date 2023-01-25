const mongoose = require("mongoose");
// x
const Schema = mongoose.Schema;
const Task = new Schema({
  fristname: {
    type: String,
    required: true,
    maxlength: [749, "maxlength:749"],
    unique: true,
    minlength: [1, "minlength:1"],
  },
  age: { type: Number, required: true },
});

const User = mongoose.model("users", Task);
module.exports = User;
