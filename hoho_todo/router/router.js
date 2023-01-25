const express = require("express");
const {
  getUser,
  getUserById,
  getPost,
  getUpdate,
  getDelete,
} = require("../controller/controller.js");

const Router = express.Router();

Router.get("/", getUser);
Router.get("/:id", getUserById);
Router.post("/post", getPost);
Router.patch("/update/:id", getUpdate);
Router.delete("/delete/:id", getDelete);

module.exports = Router;
