const jwt = require("jsonwebtoken");
const authorization = async (req, res, next) => {
  const token = req.body.token;
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
    if (!err) {
      next();
    }
    res.status(400).send("Invalid credentials");
  });
};
module.exports = authorization;
