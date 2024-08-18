#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "enter firstnumber",
        name: "firstnumber",
        type: "number"
    },
    {
        message: "enter secondnumber",
        name: "secondnumber",
        type: "number"
    },
    {
        message: "please select an operator",
        name: "operator",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
//Condition Statements
if (answer.operator == "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator == "Subtraction") {
    console.log(answer.firstoperator - answer.secondnumber);
}
else if (answer.operator == "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator == "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("please select correct operator");
}
