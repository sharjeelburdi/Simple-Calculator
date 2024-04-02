#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\tWelcome to my CLI simple calculator");
const answer = await inquirer.prompt([
    { message: "Enter First Value", type: "number", name: "firstNumber" },
    {
        message: "Enter Second Value",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "Select Any Arthmetic Operation To Perform",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Select ANy Valid Operation");
}
