const express = require("express");
const router = express.Router();
const {
    getUsers,
    createUsers,
    deleteUsers,
    getUsersbyId,
    updateUsers,
} = require("../controller/controller");

router
.get("/users", getUsers)
.get("/users/:id", getUsersbyId)
.post("/users/create", createUsers)
.put("/users/:id", updateUsers)
.delete("/users/:id", deleteUsers);

module.exports = router;