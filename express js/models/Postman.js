const mongoose = require("mongoose")
const User= require("../models/User")
const Schema= mongoose.Schema
const model= mongoose.model;

const PostSchema = new Schema({
    text: {type:String},
    likes:{type:Number, default: 0},
    link:{type:String},
    tag:{type:Array},
    publishDate:{type:Date, default: new Date()},
    owner: {type: String},
});

const Post= model("posts", PostSchema)

module.exports=Post;