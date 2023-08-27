const mongoose = require("mongoose");

const experienceSchema = mongoose.Schema({
    from: Number,
    to: Number,
    organisation: String,   
    as: String,
    position: String
});

module.exports = experienceSchema;