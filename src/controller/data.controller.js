const { validationResult } = require("express-validator")
const userService = require("../service/user.service");

class DataController {
    sendAllData = async (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) return res.status(400).json(err);

        const { email } = req.user;
        const {
            fullName,
            phone,
            skill,
            course,
            organisation,
            eOrganisation,
            from,
            to,
            eCourse,
            eAbout,
            about
        } = req.body;

        const User = await userService.findUserByEmail(email);
        if (!User) {
            return res.status(400).json({ error: "User not found" });
        }

        User.fullName = fullName;
        User.phone = phone;
        User.skills.push(skill);
        User.certificate.title = course;
        User.certificate.organisation = organisation;
        User.education.organisation = eOrganisation;
        User.education.from = from;
        User.education.to = to;
        User.education.degree = eCourse;
        User.education.about = eAbout;
        User.about = about;

        User.save();
        
        return res.sendStatus(200);
    }
}

const dataController = new DataController();

module.exports = dataController;