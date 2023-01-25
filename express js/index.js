const express = require("express");
const mongoose = require("mongoose");
const Post = require("./models/Postman");
const User = require("./models/User");
const Comment = require("./models/Comment");
const URI =
  "mongodb+srv://Deserved2k:tulga2008@cluster0.4kpurtz.mongodb.net/blog";
const PostRouter = require("./router/PostRouter");
const userRouter = require("./router/userRouter");
const CommentRouter = require("./router/CommentRouter");
const port = 7001;
const cors = require("cors");
const app = express();
app.use(cors());
mongoose.connect(URI);

mongoose.connection.once("open", () => {
  console.log("mongodb connected");
});

app.use(express.json());
app.use(userRouter, PostRouter, CommentRouter);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
