const express = require("express");
const bcrypt = require("bcrypt");
const { newUser } = require("../Models/user");
const postRequest = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const hashPassword = await bcrypt.hash(password, 10);
        
        if(!username || !email || !password) {
            return res.status(400).send({success: false, message: "Please required fields"})
        }
         const checkEmail = await newUser.findOne({email});

        if(checkEmail) {
           return res.status(400).send({success: false, message: "Email Already Exits"});
        }

        const userData = await newUser.create({
            username,
            email,
            password: hashPassword
        });
       return res.status(200).send({success: true, message: "Data has been store database", data: userData});

       
        
        
    } catch (error) {
        res.status(500).send({success: false, "Some Internal Issue": error})
    }
}

module.exports = postRequest;