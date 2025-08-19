const express = require("express");
const shortUrlRouter = express.Router();

shortUrlRouter.get("/", (req,res) => {
    res.render("shortUrl", {shortUrl: null});
});


module.exports = shortUrlRouter;