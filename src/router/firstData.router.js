const {Router} = require("express");
const { authenticate } = require("../middleware/auth.midleware");
const dataController = require("../controller/data.controller");

const router = Router();

router.post("/", authenticate, dataController.sendAllData);

module.exports = router;