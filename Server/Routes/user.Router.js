const express = require("express");
const { registerUser, loginUser, usersData } = require("../Controllers/Auth.user.js");
require("dotenv").config();
const UserRouter = express.Router();
UserRouter.use(express.json());

UserRouter.post("/register", registerUser)
UserRouter.post("/login", loginUser)
UserRouter.get("/all", usersData)




















module.exports = {
    UserRouter
};