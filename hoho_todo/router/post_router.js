const express = require("express");
const {
  getPost,
  getUserById,
  getPostCreate,
  getDelete,
  getUptade,
  getListBYId,
  getListByTag,
} = require("../controller/post_controller.js");

const Post_Router = express.Router();
Post_Router.get("/", getPost);
Post_Router.get("/:id/getUserById", getUserById);
Post_Router.post("/create", getPostCreate);
Post_Router.delete("/:id", getDelete);
Post_Router.patch("/:id", getUptade);
Post_Router.get("/:id/post", getListBYId);
Post_Router.get("/tag/:tag/post", getListByTag);

module.exports = Post_Router;
