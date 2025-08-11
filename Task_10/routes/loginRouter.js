const express = require("express");
const loginRouter = express.Router();
const con = require("../database/connection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/tokenMiddleware");

loginRouter.get("/login", (req,res) => {
    res.render("login")
});


loginRouter.post("/login-data", (req,res) => {
    const {username, password} = req.body;

    const loginData = `SELECT * FROM userinfo WHERE username = ?`;
    con.query(loginData, [username, password], (error, result) => {
        if(error) throw error;
        if(result.length === 0) {
            return res.status(401).send("Invalid User found");
        }
        // Compare hash password
        const hashDbPassword = result[0].password;
        bcrypt.compare(password, hashDbPassword, (err, isMatch) => {
            if(err) throw err;
            if(!isMatch) {
                res.status(401).send("Invalid password");
            }
            const payload = {
                id: result[0].id,
                username: result[0].username

            }

            const JWT_KEY = process.env.JWT_KEY;
            const tokenVerify = jwt.sign(payload, JWT_KEY, {expiresIn: "45m"});
            res.status(200).send({message: "Token also verifying", token: tokenVerify});

        });
    });
});


module.exports = loginRouter;