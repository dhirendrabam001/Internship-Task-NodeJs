const express = require("express");
const con = require("../dbConnection/connection");
const registerRouter = express.Router();

registerRouter.get("/", (req,res) => {
    res.render("register")
});

registerRouter.post("/register", (req,res) => {
    const {username, password} = req.body;
    const insetData = `INSERT INTO users (username, password) VALUES (?, ?)`;
    con.query(insetData, [username, password], (error) => {
        if(error) throw error;
        res.send("Username and password register sucussfully");
    });
});

module.exports = registerRouter;