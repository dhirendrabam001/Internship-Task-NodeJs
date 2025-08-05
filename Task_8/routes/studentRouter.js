const express = require("express");
const studentRouter = express.Router();

studentRouter.get("/student", (req,res) => {
    res.render("student")
});





module.exports = studentRouter;