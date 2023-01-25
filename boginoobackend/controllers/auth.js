const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const { genSalt, hash } = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config;

const register = async (req, res) => {
  const { email, password } = req.body;
  const salt = await genSalt(10);

  const hash = await bcrypt.hash(password, salt);

  try {
    const user = await User.create({ email: email, password: hash });

    res.status(200).json({
      message: "created user successfully",
      DataTransfer: user,
    });

    res.send(user);

    console.log(user.users);
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  const match = await bcrypt.compare(password, user.password);
  if (match) {
    const token = jwt.sign(
      {
        user: user.email,
      },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.status(200).json({
      user: user.email,
      message: "successfully logged in",
      token: token,
    });
  } else {
    res.status(403).json({
      message: "failed to login",
    });
  }
};

module.exports = {
  register,
  login,
};
