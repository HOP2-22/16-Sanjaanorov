const express = require("express");
const Post = require("../model/post_task");
//Get List
exports.getPost = async (req, res) => {
  const user = await Post.find({});
  res.send(user);
};
// getUserById
exports.getUserById = async (req, res) => {
  const _id = req.params.id;
  const user = await Post.findById(_id);
  res.send(user);
};
// // Get List By Tag
exports.getListByTag = async (req, res) => {
  // const tag = req.params.tag;

  const user = await Post.find({
    tags: ["sport", "eat"],
  });

  res.send(user);
};

// Create Post
exports.getPostCreate = async (req, res) => {
  const user = await Post.create(req.body);
  res.send(user);
};

// Delte Post
exports.getDelete = async (req, res) => {
  const _id = req.params.id;
  const user = await Post.findByIdAndDelete(_id);
  res.send(user);
};
//  Update Post
exports.getUptade = async (req, res) => {
  const _id = req.params.id;
  const user = await Post.findByIdAndUpdate(_id, req.body);
  res.send(user);
};
exports.getListBYId = async (req, res) => {
  const _id = req.params.id;
  const user = await Post.find();
  const neww = user.filter((el) => {
    return el.owneriD === _id;
  });
  res.send(neww);
};
