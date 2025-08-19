const express = require("express");
const urlRouter = express.Router();
const {shortUrlData, getOriginalUrl} = require("../controller/postUrlController");


urlRouter.post("/submit-data", shortUrlData);

// Redirecting to original url dynamic routing
urlRouter.get("/:shortCodee", getOriginalUrl);


module.exports = urlRouter;