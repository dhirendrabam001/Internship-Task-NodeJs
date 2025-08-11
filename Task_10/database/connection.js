const mysql2 = require("mysql2");
const con = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "@Dhirendra001",
    database: "newusers"
});

con.connect(function(error) {
    if(error) throw error;
    console.log("MYSQL Database Connection Sucussfully");
    
});

module.exports = con;