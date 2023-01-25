const mongoose = require("mongoose");
const express = require("express");
const URI =
  "mongodb+srv://hohohoho:posedotrash@cluster0.0irz378.mongodb.net/blog";
mongoose.connection.once("open", () => {
  console.log("mongodb connected");
});
