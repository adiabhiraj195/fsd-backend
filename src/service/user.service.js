const { genSalt, hash, compare } = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../db/modle/user.mongo");

class UserService {
    createUser = async ({ fullName, email, password }) => {
        const salt = await genSalt();
        // console.log(password)
        const hashPassword = await hash(password, salt);
        const verficationToken = jwt.sign({ email }, process.env.VERIFY_EMAIL_SECRET);

        await User.create({
            fullName: fullName,
            email: email,
            password: hashPassword,
            verficationToken: verficationToken
        });
        console.log("User Created");
    };

    findUserByEmail = async (email) => {
        return await User.findOne({ email: email });
        //can add excluding extra data from the server
    };

    checkPassword = async (password, encryptPassword) => {
        return await compare(password, encryptPassword);
    };

    loginResponse = async (user) => {
        const requestUser = await this.getRequestUser({ user });

        const accessToken = jwt.sign({ requestUser }, process.env.ACCESS_TOKEN_SECRET, { });
        user.islogedin = true;
        user.save();
        //todo add expireIn to the token 
        //todo- add refresh token

        return { accessToken };
    }

    logoutUser = async(user)=>{
        user.islogedin = false;
        user.save();
        return {
            status: "user loged out"
        }
    }

    getRequestUser = (user) => {
        if (user instanceof User) {
            return {
                email: user.email
            }
        }
        return user;
    }
}

const userService = new UserService();

module.exports = userService;