const express = require("express");
const con = require("../database/connection");
const bcrypt = require("bcrypt");

const registerMiddleware = async (req,res,next) => {
    try {
        const  {username, email, password, cpassword} = req.body;
        
        if(!username || !email || !password || !cpassword) {
            return res.status(400).send({message: "Please fill all the necessary requirement"});
        }
        // match password and cpassword
        if(password !== cpassword) {
            return res.send(400).send({message: "Please match the password"});
        }
        const hashPassword = await bcrypt.hash(password, 10);
        req.body.hashPassword = hashPassword;
        
        next();
        
    } catch (error) {
        return res.status(401).send({message: "Some issue for middleware"});
        
    }
    
}

module.exports = registerMiddleware;