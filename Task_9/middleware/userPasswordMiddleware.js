const express = require("express");
const con = require("../dbConnection/connection");

const checkMiddleware = (req,res,next) => {
    const {username, password} = req.body;
    const checkData = `SELECT * FROM users WHERE username = ? AND password = ?`;
    con.query(checkData, [username, password], (error, result) => {
        if(error) {
            return next(error);
        }
        if(result.length>0) {
            const user = result[0];
            req.user = user;
            next();

        } else {
            res.send({
                success: false,
                message: "Username And Password Does Not Matched"
            })
        }

    });
}

module.exports = checkMiddleware;