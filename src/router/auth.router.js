const express = require("express");
const userValidator = require("../validators/user.validate");
const userController = require("../controller/user.controller");
const { authenticate } = require("../middleware/auth.midleware");

const auth = express.Router();

auth.post("/", userValidator.register, userController.register);
auth.post("/login", userValidator.login, userController.login);
auth.post("/logout", authenticate, userController.logout);

module.exports = auth;