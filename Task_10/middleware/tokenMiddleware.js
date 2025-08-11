const express = require("express");
const registerRouter = require("../routes/registerRouter");
const jwt = require("jsonwebtoken");
// const bearer_token = require("bearer-token");
require("dotenv").config();

const JWT_KEY = process.env.JWT_KEY;

const verifyToken = (req,res,next) => {
    const headersInfo = req.headers["authorization"];
    // console.log("Authorizaation received", headersInfo);
    
    const finalToken = headersInfo && headersInfo.split(' ')[1];
    console.log("Authorizaation received", finalToken);
    
    

    if(!finalToken) {
        return res.status(400).send("Please fill the token")
    }

    jwt.verify(finalToken, JWT_KEY, (error, decoded) => {
        if(error) {
            return res.send("Invalid Token")
        } else {
            req.users = decoded;
            next();
        }
    });
}

module.exports = verifyToken;