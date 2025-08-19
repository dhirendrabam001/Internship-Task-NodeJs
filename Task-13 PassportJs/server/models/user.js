const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
    googleId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    picture: {
        type: String,
        required: true
    }
}, {timestamps: true});

const userModel = mongoose.model("userInfo", userScheme);

module.exports = userModel;