const mongoose = require("mongoose");

const certificateSchema = mongoose.Schema({
    title: {
        type: String,
    },
    organisation:{
        type: String,
    }
});

module.exports = certificateSchema;