const express = require("express");
const con = require("../dbConnection/db");
const deleteRouter = express.Router();

deleteRouter.get("/delete/:id", (req,res) => {
    const deleteData = `DELETE FROM studentdata WHERE id = ?`;
    const deleteId = req.params.id;
    con.query(deleteData, [deleteId], (error, result) => {
        if(error) throw error;
        console.log("Data Has Been Delete Sucussfully", result) 
        res.redirect("/");
    });
});


module.exports = deleteRouter;