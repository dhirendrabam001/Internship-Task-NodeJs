// Multi-Operation Calculator using .env and Chalk in Node.js

const chalk = require("chalk");
const { stdin, stdout } = require("process");
require("dotenv").config();
const readline = require("readline");

// First require .env number
const num1 = Number(process.env.NUM1);
const num2 = Number(process.env.NUM2);

// Read line info
const r1 = readline.createInterface({
    input: stdin,
    output: stdout
});

// Take the user input

r1.question("Enter Your Operation Which You Want (add, sub, mul, divide) :", function(calculation) {
    let finalResult = [];
    switch (calculation) {
        case "add":
            finalResult = num1 + num2;
            console.log(chalk.yellow(`${num1} + ${num2} = ${finalResult}`));
            break;
            case "sub":
                finalResult = num1 - num2;
                console.log(chalk.blue(`${num1} - ${num2} = ${finalResult}`));
                break;
                case "mul":
                    finalResult = num1 * num2;
                    console.log(chalk.red(`${num1} * ${num2} = ${finalResult}`));
                    break;
                    case "divide":
                        finalResult = num1 / num2;
                        console.log(chalk.bgYellow(`${num1} / ${num2} = ${finalResult}`));
                        break;           
    }
    r1.close();
});
