const express = require("express");
const con = require("../dbConnection/db");
const studentRecord = express.Router();

studentRecord.get("/student-records", (req,res) => {
    const allData = `SELECT * FROM studentdata`;
    con.query(allData, (error, result) => {
        if(error) throw error;
        res.render("student", ({studentInfo: result}));
    });
});



studentRecord.get("/add-student", (req,res) => {
    res.render("add-student-form")
});

studentRecord.post("/student-records", (req,res) => {
    const {name, email, course, number} = req.body;
    const insertData = `INSERT INTO studentdata(name, email, course, number) VALUES (?, ?, ?, ?)`;
    con.query(insertData, [name, email, course, number], (error, result) => {
        if(error) throw error;
        console.log("Data Has Been Insert Sucussfully", result);
        res.redirect("/student-records")
        
    });
});



module.exports = studentRecord;