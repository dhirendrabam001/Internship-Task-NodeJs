const express = require("express");
const con = require("../dbConnection/db");
const studentRecord = express.Router();


// Show all data
studentRecord.get("/", (req,res) => {
    const userData = `SELECT * FROM studentdata`;
    con.query(userData, (error, result) => {
        if(error) throw error;
        res.render("student", {studentList: result});
    });
});

// Get add information form
studentRecord.get("/add-student", (req,res) => {
    res.render("add-student-form")
});

// Post data

studentRecord.post("/student-records", (req,res) => {
    const {name, email, course, number} = req.body;
    const insertData = `INSERT INTO studentdata(name, email, course, number) VALUES (?, ?, ?, ?)`;
    con.query(insertData, [name, email, course, number], (error, result) => {
        if(error) throw error;
        console.log("Data Has Been Insert Sucussfully", result);
        res.redirect("/")
        
    });
});



module.exports = studentRecord;