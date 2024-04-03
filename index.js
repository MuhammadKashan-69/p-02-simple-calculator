import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { name: "firstNumber",
        type: 'number',
        message: "enter your first number" },
    { name: "secondNumber",
        type: "number",
        message: "enter your second number" },
    { name: "Operator",
        type: "list",
        message: "select operator to perform task",
        choices: ["addition", "subtraction", "multiplication", "division"] }
]);
if (answer.Operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.Operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.Operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.Operator === 'division') {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Invalid Operator");
}
