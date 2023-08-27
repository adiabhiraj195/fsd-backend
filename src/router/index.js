const express = require("express");
const auth = require("./auth.router");
const profile = require("./profile.router");
const firstData = require("./firstData.router");

const router = express.Router();

router.use("/auth", auth);
router.use("/profile", profile);
router.use("/firstData", firstData)

module.exports = router;