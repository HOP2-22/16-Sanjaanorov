const express = require("express");
const User = require("../model/Task");
// getUserallUser
exports.getUser = async (req, res) => {
  const user = await User.find();
  res.send(user);
};
// getUser
exports.getUserById = async (req, res) => {
  const _id = req.params.id;
  const user = await User.findById(_id);
  res.send(user);
};
// getPost
exports.getPost = async (req, res) => {
  const user = await User.create(req.body);
  res.send(user);
};
// getUptade
exports.getUpdate = async (req, res) => {
  const id = req.params.id;
  const newUser = req.body;
  const user = await User.findByIdAndUpdate(id, newUser);
  res.send(user);
};
// getDelete
exports.getDelete = async (req, res) => {
  const id = req.params.id;
  const user = await User.findByIdAndDelete(id);
  res.send(user);
};
