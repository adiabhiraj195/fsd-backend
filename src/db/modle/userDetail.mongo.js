const mongoose = require("mongoose");

const userdetailSchema = mongoose.Schema({
    phone: {
        type: Number,
        require:true,
    },
    about:{
        type: String,
        require: true
    }

});

// module.exports = mongoose.model("Userdetail", userdetailSchema);