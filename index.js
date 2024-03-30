import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your first number:", type: "number", name: "First Number" },
    { message: "Enter your second number:", type: "number", name: "Second Number" },
    {
        message: "Choose your operator",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
const firstNumber = answer["First Number"];
const secondNumber = answer["Second Number"];
if (answer.operator === "Addition") {
    console.log(firstNumber + secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(firstNumber - secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(firstNumber * secondNumber);
}
else if (answer.operator === "Division") {
    console.log(firstNumber / secondNumber);
}
else {
    console.log("Error! Wrong Operator");
}
