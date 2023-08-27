const { Router } = require("express");
const profileController = require("../controller/profile.controller");
const { authenticate } = require("../middleware/auth.midleware");

const profileRouter = Router();

profileRouter.post("/fullName", authenticate, profileController.updateFullName);
profileRouter.post("/email", authenticate, profileController.updateEmail);
profileRouter.post("/phone", authenticate, profileController.updatePhone);
profileRouter.post("/about", authenticate, profileController.updateAbout);
profileRouter.post("/addskill", authenticate, profileController.updateSkills);
profileRouter.post("/certificate", authenticate, profileController.updateCertificate);
profileRouter.post("/education", authenticate, profileController.updateEducation);


profileRouter.get("/alldata", authenticate, profileController.fetchAllData);

module.exports = profileRouter;