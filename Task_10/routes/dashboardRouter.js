const express = require("express");
const dashboardRouter = express.Router();
const verifyToken = require("../middleware/tokenMiddleware");
const bearer_token = require("bearer-token");


dashboardRouter.get("/dashboard", verifyToken, (req,res) => {
    res.send(`WELCOME, ${req.users.username}, Now You can access dashboard`)
    
});

module.exports = dashboardRouter;