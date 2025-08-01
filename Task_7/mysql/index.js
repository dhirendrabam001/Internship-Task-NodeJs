const mysql2 = require("mysql2");

const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "@Dhirendra001",
    database: "dbmysql"
    
});

// CONNECTION DATABASE
db.connect(function(error) {
    if(error) throw error
    console.log("Database Connection sucussfully");


    // CREATE DATABASE

    // db.query("CREATE DATABASE dbmysql", function(err, result) {
    //     if(err) throw err;
    //     console.log("Database Create Sucussfully");
        
    // });

    // CREATE TABLE

    // const createTable = `CREATE TABLE users(
    //      id INT AUTO_INCREMENT PRIMARY KEY,
    //      name VARCHAR(200) NOT NULL,
    //      address VARCHAR(200) NOT NULL,
    //      email VARCHAR(200) NOT NULL UNIQUE
    // )`;

    // db.query(createTable, function(error, result) {
    //   if(error) throw error;
    //   console.log("Table is create sucussfully", result);
      
    // });

    // INSERT OPERATION

    // const inserData = `INSERT INTO users(name, address, email) VALUES(?, ?, ?)`;
    // const values = ["Dhirendra", "Deerabassi", "dhirendrabam12345@gmail.com"];
    // db.query(inserData, values, function(error, result) {
    //   if(error) throw error;
    //   console.log("Data Insert Sucussfully", result);
    // });

    // READ OPERATION

    const readData = `SELECT * FROM users`;
   db.query(readData, function(error, result) {
    if(error) throw error;
    console.log("Data Read Sucussfully", result);
   });

  //  UPDATE OPERATION

//   const updateData = `UPDATE users SET address = ? WHERE email = ?`;
//   const values = ["Nepal", "dhirendrabam12345@gmail.com"];
//   db.query(updateData, values, function (error, result) {
//     if(error) throw error;
//     console.log("Data Has Been Updated Sucussfully", result);
    
//   });

// DELETE oPERATION

// const deleteData = `DELETE FROM users WHERE email = ?`;
// const values = ["dhirendrabam12345@gmail.com"];

// db.query(deleteData, values, function(error, result) {
//     if(error) throw error;
//     console.log("Data Has Been Delete Sucussfully", result);
    
// })
      




    

    
});