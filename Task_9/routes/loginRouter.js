const express = require("express");
const con = require("../dbConnection/connection");
const checkMiddleware = require("../middleware/userPasswordMiddleware");
const loginRouter = express.Router();

loginRouter.get("/login", (req,res) => {
    res.render("login")
});

loginRouter.post("/login", checkMiddleware, (req,res) => {
    const randomCode = Math.floor(2000 + Math.random() * 1000);
    res.send({
        success: true,
        message: "Your Random Generated Code is" +randomCode
    });
});



module.exports = loginRouter;