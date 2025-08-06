const express = require("express");
const editRouter = express.Router();
const con = require("../dbConnection/db");


editRouter.get("/edit/:id", (req,res) => {
    const userId = req.params.id;
    const getData = `SELECT * FROM studentdata WHERE id = ?`;

    con.query(getData, [userId], (error, result) => {
        if(error) throw error;
        if(result.length>0) {
            const student = result[0];
            res.render("edit", ({student}));
        } else {
            console.log("Student Information Does Not Found");
        }
    });
});

editRouter.post("/updateData", (req,res) => {
    const {name, email, course, number} = req.body;
    const userId = req.body.id;
    const studentInfo = `UPDATE studentdata SET name = ?, email = ?, course = ?, number = ? WHERE id = ?`;

    con.query(studentInfo, [name, email, course, number, userId], (error, result) => {
        if(error) throw error
        console.log("Data Has Been Updated Sucussfully", result);
        res.redirect("/")
        
    });
});



















// editRouter.get("/edit/:id", (req,res) => {
//     const userId = req.params.id;
//     const getData = `SELECT * FROM studentdata WHERE id = ?`;
//     con.query(getData, [userId], (error, result) => {
//         if(error) throw error;
//         if(result.length>0) {
//             const student = result[0];
//             res.render("edit", {student});
//         } else {
//             console.log("Student record not found"); 
//         }
//     });
// });

// editRouter.post("/updateData", (req,res) => {
//     const userId = req.body.id;
//     const {name, email, course, number} = req.body;
//     const updateData = `UPDATE studentdata SET name = ?, email = ?, course = ?, number = ? WHERE id = ?`;
//     con.query(updateData, [name, email, course, number, userId], (error, result) => {
//         if(error) throw error;
//         console.log("Data Has Been Updated Sucussfully", result);
//         res.redirect("/")    
//     });
// });


module.exports = editRouter;