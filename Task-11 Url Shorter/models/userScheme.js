const mongoose = require("mongoose");

const urlShorterScheme = new mongoose.Schema({
    shortCode: {
        type: String,
        required: true

    },

    loginurl: {
        type: String,
        required: true

    },
});

const newUrlShorter = mongoose.model("usershorter", urlShorterScheme);

module.exports = {newUrlShorter};