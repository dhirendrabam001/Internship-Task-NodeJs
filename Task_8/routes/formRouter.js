const express = require("express");
const con = require("../dbConnection/db");
const formRouter = express.Router();

formRouter.post("/submit-data", (req,res) => {
//    console.log(req.body);
   const {title, fname, lname, selectdata, message} = req.body;
   const insertData = `INSERT INTO users(title, fname, lname, selectdata, message) VALUES(?, ?, ?, ?, ?)`;
   con.query(insertData, [title, fname, lname, selectdata, message], (error, result) => {
    if(error) throw error;
    console.log("Data Has been Stored Sucussfully in Mysql", result);
    res.send("Data Has been Stored Sucussfully in Mysql");
   });


   // const deleteData = `DELETE FROM users WHERE title = ?`;
   // con.query(deleteData, ["frontend"], (error, result) => {
   //    if(error) throw error;
   //    console.log("Data has been delete sucussfully", result);
   //    res.send("Data has been delete sucussfully")
      
   // });


});


module.exports = formRouter;