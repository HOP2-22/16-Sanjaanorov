const express = require("express");
const router = express.router();
const { GetComments } = require("../controller/comment");
router.get("/comment", GetComments);
