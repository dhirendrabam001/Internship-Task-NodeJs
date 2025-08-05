const express = require("express");
const mysql2 = require("mysql2");

const con = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "@Dhirendra001",
    database: "studentdb"
});

con.connect(function(error) {
    if(error) throw error;
    console.log("Database Connected Sucussfully");
    
});

module.exports = con;
