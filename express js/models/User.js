const mongoose = require("mongoose");
const model = mongoose.model;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { 
    type: String,
    required:[true, "Firstname is required"],
    maxlength:[50, "Firstname length must be 6 to 50 characters"]
  },
  lastname:{
   type:String,
   required:[true, "Lastname is required"],
   maxlength:[50, "Lastname length must be 6 to 50 characters"],
  },
  gender:{
    type:String,
    enum:{values:["Male","Female","Non-binary","Prefer not to say"], message: "{VALUE} is not supported"}
  },
  email: { type:String, required: [true, "Email is not required"] },
    phone: String,
    picture: String,
    dateOfBirth: Date,
    registerDate:{type: Date, default : Date.now}
  }
  
);

const User = model("users", UserSchema);
module.exports = User;