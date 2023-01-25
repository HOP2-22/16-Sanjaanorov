const express = require("express");
const {
  getComment,
  getCommentCreate,
  getCommentDelete,
  getPostByID,
  getPostByUser,
} = require("../controller/comment_controller");
const CommentRouter = express.Router();

CommentRouter.get("/", getComment);
CommentRouter.post("/create", getCommentCreate);
CommentRouter.delete("/delete/:id", getCommentDelete);
CommentRouter.get("/:id", getPostByID);
CommentRouter.get("/user/:id", getPostByUser);

module.exports = CommentRouter;
