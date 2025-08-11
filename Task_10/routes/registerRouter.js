const express = require("express");
const registerRouter = express.Router();
const con = require("../database/connection");
const jwt = require("jsonwebtoken");
const registerMiddleware = require("../middleware/registerMiddleware");
registerRouter.get("/", (req, res) => {
    res.render("register")
});

registerRouter.post("/register-data", registerMiddleware, (req, res) => {
    const { username, email, hashPassword } = req.body;
    const inserData = `INSERT INTO userinfo (username, email, password) VALUES (?, ?, ?)`;
    con.query(inserData, [username, email, hashPassword], (error, result) => {
        if (error) throw error;
        
        const JWT_KEY = process.env.JWT_KEY;
        const generateToken = jwt.sign({username, email}, JWT_KEY, {expiresIn: "45m"});
        console.log("The generated token is", generateToken);
        
        res.send({ message: "userData has been register sucussfully" });
        

    });



});


module.exports = registerRouter;