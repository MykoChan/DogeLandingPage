let operandOne = '';
let operandTwo = '';
let currentOperator = '';
let shouldClear = false;

function operate(operator, num1, num2) {
    console.log(`operate on : ${num1} ${operator} ${num2}`)
    if (operator == "+") {
        return num1 + num2;
    } else if (operator == "-") {
        return num1 - num2;
    } else if (operator == "×") {
        return num1 * num2;
    } else if (operator == "÷") {
        if (num2 == 0) return null;
        return num1 / num2;
    }
}

function clear() {
    inputScreen.textContent = '0';
    historyScreen.textContent = '';
    operandOne = '';
    operandTwo = '';
    currentOperator = '';
}

function deleteNumber() {
    inputScreen.textContent = inputScreen.textContent.slice(0, -1);
    if (inputScreen.textContent == '') {
        inputScreen.textContent = '0';
    }
}

function addOperator(e) {
    if (currentOperator) evaluate(); // If there's already an operator selected, then that means there's an equation to evaluate.
    currentOperator = e.target.textContent;
    operandOne = inputScreen.textContent;
    operandTwo = '';
    historyScreen.textContent = `${operandOne} ${currentOperator}`;
    shouldClear = true;
}

function evaluate() {
    // Clicking "=" before selecting an operator shouldn't do anything
    // When evaluate is called when shouldClear is set only happens when we click an operator back to back. 
    // In this case we only want to change the operator and not evaluate anything.
    if (!currentOperator || shouldClear) return; 
    if (currentOperator == "÷" && inputScreen.textContent == "0") {
        alert("Cannot divide by 0!");
        return;
    }
    console.log(`Evaluating ${operandOne} ${currentOperator} ${operandTwo}`)
    if (!operandTwo) {
        operandTwo = inputScreen.textContent;
    }
    historyScreen.textContent = `${operandOne} ${currentOperator} ${operandTwo} =`;
    operandOne = roundResult(operate(currentOperator, Number(operandOne), Number(operandTwo)))
    inputScreen.textContent = operandOne;
    currentOperator = '';
}

function roundResult(number) {
    return Math.round(number*10000)/10000;
}

function addDecimal() {
    if (!inputScreen.textContent.includes(".")) {
        inputScreen.textContent += ".";
    }
}

const historyScreen = document.querySelector('.calculator-history');
const inputScreen = document.querySelector('.calculator-input');
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const equalsButton = document.querySelector("#equals");
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const decimalButton = document.querySelector("#decimal");

clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', deleteNumber);
equalsButton.addEventListener('click', evaluate);
decimalButton.addEventListener('click', addDecimal);

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', addOperator);
});

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', () => {
        if (inputScreen.textContent == '0' || shouldClear) {
            inputScreen.textContent = '';
        }
        inputScreen.append(numberButton.textContent);
        shouldClear = false;
    })
})