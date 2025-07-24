// CURD OPERATION USING FS PROMISES OPETATION
const fs = require("fs");
const path = require("path");

const pathName = __dirname; // read only directory file

const fileName = "dhirendra.txt";
const namePath = path.join(__dirname, fileName);

// Read directory file 

fs.promises.readdir(pathName).then((data) => {
    console.log("Data Read Sucussfully",data);
    
}).catch((error) => {
    console.log(error);
    
});

// Write Operation Using Fs Promises
fs.promises.writeFile(namePath, "This is the first data", "utf8").then((data) => {
    console.log("Data Has Been Write Sucussfully", data);
    
}).catch((err) => {
    console.error(err);
});

// Read Operation Using Fs Promises
fs.promises.readFile(namePath, "utf8").then((data) => {
    console.log("Data Read Sucussfully", data);
    
}).catch((err) => {
    console.err(er)
});

// Update Operation Using Fs Promises
fs.promises.appendFile(namePath, "\n Welcome to dhirendra bam", "utf8").then((data) => {
    console.log("Data Has Been Updated Sucussfully",data);
    
}).catch((err) => {
    console.error(err);
});

// Delete Operation Using Fs Promises
// fs.promises.unlink(namePath).then((data) => {
//     console.log("Data Has Been Delete Sucussfully");
    
// }).catch((err) => {
//     console.error(err);
// });