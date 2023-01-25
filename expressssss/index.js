const mongoose = require("mongoose");
const express = require("express");
const app = express();
const { application } = require("express");
const User = require("./models/user");
const port = 8000;
const URI =
  "mongodb+srv://hohohoho:posedotrash@cluster0.0irz378.mongodb.net/blog";
mongoose.connect(URI);
mongoose.connection.once("open", () => {
  console.log("mongodb connected");
});
app.listen(port, () => {
  console.log(`listened to port ${port}`);
});
app.post("/haha", async (request, response) => {
  const data = await User.find();
  response.send(data);
});
app.get("/comments", async (request, response) => { });
