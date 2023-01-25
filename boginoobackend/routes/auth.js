const express = require("express");
const { register, login } = require("../controllers/auth");
const router = express.Router();

router.post("/register", register).get("/register", (req, res) => {
  res.send("hi");
});
router.post("/login", login).get("/login", (req, res) => {
  res.send("hi1");
});

module.exports = router;
