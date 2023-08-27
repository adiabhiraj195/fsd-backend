const mongoose = require("mongoose");
// const certificateSchema = require("./certificate.mongo");
const experienceSchema = require("./experience.mongo.js");

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true
    },
    verficationToken: {
        type: String,
        require: true
    },
    phone: { type: Number },
    about: { type: String },
    skills: { type: Array },
    certificate: {
        title: {
            type: String,
        },
        organisation: {
            type: String,
        }
    },
    experience: [experienceSchema],
    education: {
        from: String,
        to: String,
        organisation: String,
        degree: String,
        about: String
    },
    islogedin : {
        type: Boolean,
        default:false
    }
    // userdetail: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Userdetail"
    // }
    //reference to the data collection of user
});

module.exports = mongoose.model("User", userSchema);