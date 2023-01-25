const express = require("express");
const router = express.Router();
const {
  getPosts,
  createPosts,
  getPostsbyId,
  updatePosts,
  deletePosts,
  getPostsbyUserId,
  // getListByTag,
} = require("../controller/PostController");

router
  .get("/posts", getPosts)
  .get("/posts/:id", getPostsbyId)
  .post("/posts/create", createPosts)
  .put("/posts/:id", updatePosts)
  .delete("/posts/:id", deletePosts)
  .get("/users/:id/posts", getPostsbyUserId)
  // .get("/tag/:id/post", getListByTag);

module.exports = router;
