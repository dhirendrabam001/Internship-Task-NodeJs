// CURD OPERATION FOR ASYNCHRONIZATION OPETATION

const fs = require("fs");
const path = require("path");
const fileName = "dhirendra.txt";
const pathName = path.join(__dirname, fileName);

// Write Operation Asynchronization

fs.writeFile(pathName, "hello world", "utf8", (error) => {
    if(error) {
        console.log("Some issue for submit data", error);
        
    } else {
        console.log("Data Has Been Write");
        
    }
});

// Read Operation Asynchronization
fs.readFile(pathName, "utf8", (error, data) => {
    if(error) {
        console.error("Some issue", error)
    } else {
        console.log("Data Has Been Read Sucussfully", data);
        
    }
})

// // Update Operation Asynchronization
fs.appendFile(pathName, "\nUpdated Dhirendra Bam", "utf8", (error,data) => {
    if(error) {
        console.error(error);
    } else {
        console.log("Updated Data Here", data);
        
    }
})

// Update Operation Asynchronization
// fs.unlink(pathName, (error) => {
//     if(error) {
//         console.error(error);
        
//     } else {
//         console.log("Delete Sucussfully");
        
//     }
// })
