const { validationResult } = require("express-validator");
const userService = require("../service/user.service");

class UserController {
    register = async (req, res) => {
        const err = validationResult(req);

        if (!err.isEmpty()) {
            return res.status(400).json(err);
        }

        const { fullName, email, password1 } = req.body;
        await userService.createUser({
            fullName,
            email,
            password: password1,
        });

        return res.sendStatus(200);
    }

    login = async (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) {
            return res.status(400).json(err);
        };

        const { email, password } = req.body;
        const user = await userService.findUserByEmail(email);
        if (!user) {
            return res.status(400).json({
                error: "User is not found",
            });
        };
        const checkPassword = await userService.checkPassword(password, user.password);
        if (!checkPassword) {
            return res.status(400).json({
                error: "Password does not match",
            });
        };
        const loginResponse = await userService.loginResponse(user);
        return res.status(200).json(loginResponse);

    };

    logout = async (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) return res.status(400).json(err);
        const { email } = req.user;

        const user = await userService.findUserByEmail(email);
        if (!user) {
            return res.status(400).json({ error: "something went wrong try again" });
        }
        const logoutResponse = await userService.logoutUser(user);
        return res.status(200).json(logoutResponse);

    }
}
const userController = new UserController();

module.exports = userController;


