// Command Line calculator using modules and process.arvg

// Exports

const add = require("./module");
const x = Number(num1);
const y = Number(num2);

const finalResult = [];

switch(operation) {
    case "add":
        finalResult = add(x, y);
        break;

}
console.log(`Result: ${finalResult}`);

