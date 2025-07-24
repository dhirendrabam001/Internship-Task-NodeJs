// CURD OPERATION FOR SYNCHRONIZATION OPETATION

const fs = require("fs");
const path = require("path");
const nameFile = "dhirendra.txt";
const pathName = path.join(__dirname, nameFile);

// File writeFileSync Operation
const fileWrite = fs.writeFileSync(pathName, "Hello World", "utf8");

console.log(fileWrite);


// readFileSync File operation
const readFile = fs.readFileSync(pathName, "utf8");
// console.log(readFile.toString());
console.log(readFile);

// updateFileSync file operation

const appendFile = fs.appendFileSync(pathName, "\n Hello Bam Thakuri", "utf8");
console.log(appendFile);

// deleteFileSync file operation
// const deleteFile = fs.unlinkSync(pathName);
// console.log(deleteFile);





