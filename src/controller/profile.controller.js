const { validationResult } = require("express-validator");
const userService = require("../service/user.service");

class ProfileController {
    updatePhone = async (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) return res.status(400).json(err);

        const { email } = req.user;
        // console.log(email);
        const { pNumber } = req.body;
        // console.log(pNumber);
        const User = await userService.findUserByEmail(email);
        // console.log(User);
        if (pNumber !== null && pNumber !== undefined) {
            User.phone = Number(pNumber);
        }
        User.save();
        // if(pNumber!==null && pNumber!== undefined){
        //     await User.updateOne({phone: Number(pNumber)});
        // }
        return res.sendStatus(200);

    };

    updateFullName = async (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) return res.status(400).json(err);

        const { email } = req.user;
        const { fullName } = req.body;

        const User = await userService.findUserByEmail(email);
        if (fullName !== null && fullName !== undefined) {
            User.fullName = fullName;
        };
        User.save();
        return res.sendStatus(200);
    };

    updateEmail = async (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) return res.status(400).json(err);

        const { email } = req.user;
        const { newEmail } = req.body;

        const User = await userService.findUserByEmail(email);
        if (newEmail !== null && newEmail !== undefined) {
            User.email = newEmail;
        };
        User.save();
        return res.sendStatus(200);
    };

    updateAbout = async (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) return res.status(400).json(err);

        const { email } = req.user;
        const { about } = req.body;

        const User = await userService.findUserByEmail(email);
        if (about !== null && about !== undefined) {
            User.about = about;
        };
        User.save();
        return res.sendStatus(200);
    };

    updateSkills = async (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) return res.status(400).json(err);

        const { email } = req.user;
        const { newSkill } = req.body;

        const User = await userService.findUserByEmail(email);
        if (newSkill !== null && newSkill !== undefined) {
            User.skills.push(newSkill);
        };
        User.save();
        return res.sendStatus(200);
    };
    updateCertificate = async (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) return res.status(400).json(err);

        const { email } = req.user;
        const { title, organisation } = req.body;

        const User = await userService.findUserByEmail(email);
        if (title !== null && title !== undefined) {
            User.certificate.title = title;
            User.certificate.organisation = organisation
        };
        User.save();
        return res.sendStatus(200);
    };
    updateEducation = async (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) return res.status(400).json(err);

        const { email } = req.user;
        const { 
            organisation,
            degree,
            from,
            to,
            about        
        } = req.body;

        const User = await userService.findUserByEmail(email);
        if (organisation !== null && organisation !== undefined) {
            User.education.degree= degree;
            User.education.organisation = organisation;
            User.education.from = from;
            User.education.to = to;
            User.education.about = about;
        };
        User.save();
        return res.sendStatus(200);
    };

    fetchAllData = async (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) return res.status(400).json(err);

        const { email } = req.user;
        console.log(email);
        const User = await userService.findUserByEmail(email);

        return res.status(200).json(User);
    }

}

const profileController = new ProfileController();

module.exports = profileController;