let operandOne = "";
let operandTwo = "";
let currentOperator = "";
let shouldClear = false;

const historyScreen = document.querySelector(".calculator-history");
const inputScreen = document.querySelector(".calculator-input");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const equalsButton = document.querySelector("#equals");
const decimalButton = document.querySelector("#decimal");
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");

function operate(operator, num1, num2) {
    if (operator === "+") {
        return num1 + num2;
    }
    if (operator === "-") {
        return num1 - num2;
    }
    if (operator === "×") {
        return num1 * num2;
    }
    if (operator === "÷") {
        if (num2 === 0) return null;
        return num1 / num2;
    }
    return null;
}

function appendNumber(number) {
    if (inputScreen.textContent === "0" || shouldClear) {
        inputScreen.textContent = "";
    }
    inputScreen.append(number);
    shouldClear = false;
}

function deleteNumber() {
    inputScreen.textContent = inputScreen.textContent.slice(0, -1);
    if (inputScreen.textContent === "") {
        inputScreen.textContent = "0";
    }
}

function clear() {
    inputScreen.textContent = "0";
    historyScreen.textContent = "";
    operandOne = "";
    operandTwo = "";
    currentOperator = "";
}

function roundResult(number) {
    return Math.round(number * 10000) / 10000;
}

function evaluate() {
    // Clicking "=" before selecting an operator shouldn't do anything
    // If shouldClear is true, this signifies that an operator was just selected
    // and evaluate should not return anything.
    if (!currentOperator || shouldClear) return;
    if (currentOperator === "÷" && inputScreen.textContent === "0") {
        alert("Cannot divide by 0!"); // eslint-disable-line no-alert
        return;
    }
    if (!operandTwo) {
        operandTwo = inputScreen.textContent;
    }
    historyScreen.textContent = `${operandOne} ${currentOperator} ${operandTwo} =`;
    operandOne = roundResult(
        operate(currentOperator, Number(operandOne), Number(operandTwo))
    );
    inputScreen.textContent = operandOne;
    currentOperator = "";
}

function addOperator(operator) {
    // If there's already an operator selected, then that means there's an equation to evaluate.
    if (currentOperator) evaluate();
    currentOperator = operator;
    operandOne = inputScreen.textContent;
    operandTwo = "";
    historyScreen.textContent = `${operandOne} ${currentOperator}`;
    shouldClear = true;
}

function appendDecimal() {
    if (!inputScreen.textContent.includes(".")) {
        inputScreen.textContent += ".";
    }
}

function convertOperator(operator) {
    if (operator === "-") return "-";
    if (operator === "+") return "+";
    if (operator === "*") return "×";
    if (operator === "/") return "÷";
    return null;
}

function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
    if (e.key === ".") appendDecimal();
    if (e.key === "=" || e.key === "Enter") evaluate();
    if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/")
        addOperator(convertOperator(e.key));
    if (e.key === "Backspace") deleteNumber();
    if (e.key === "Escape") clear();
}

clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteNumber);
equalsButton.addEventListener("click", evaluate);
decimalButton.addEventListener("click", appendDecimal);
document.body.addEventListener("keydown", handleKeyboardInput);

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", () =>
        addOperator(operatorButton.textContent)
    );
});

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", () =>
        appendNumber(numberButton.textContent)
    );
});
