// Multi-Operation Calculator using .env and Chalk in Node.js

const chalk = require("chalk");
require("dotenv").config();

// require .env num1 and num2

const num1 = Number(process.env.NUM1);
const num2 = Number(process.env.NUM2);

function createCalculator(calculation, a, b) {
    let finaResult = [];
    switch(calculation) {
        case "add":
            finaResult = a + b;
            console.log(chalk.red(`${num1} + ${num2} = ${finaResult}`));
            break;
            case "mul":
                finaResult = a * b;
                console.log(chalk.yellow(`${num1} * ${num2} = ${finaResult}`));
                break;
                case "sub":
                    finaResult = a - b;
                    console.log(chalk.blue(`${num1} - ${num2} = ${finaResult}`));
                    break;
                    case "divide":
                        finaResult = a / b;
                        console.log(chalk.bgYellow(`${num1} / ${num2} = ${finaResult}`));
  
            
    }
}
createCalculator("add", num1, num2);
createCalculator("mul", num1, num2);
createCalculator("sub", num1, num2);
createCalculator("divide", num1, num2);