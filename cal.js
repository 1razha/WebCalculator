let display = document.getElementById("display");
let currentInput = "";
let operator = null;
let firstOperand = null;

function clearDisplay() {
    currentInput = "";
    operator = null;
    firstOperand = null;
    display.innerText = "0";
}

function appendNumber(number) {
    if (currentInput === "0") {
        currentInput = number.toString();
    } else {
        currentInput += number;
    }
    display.innerText = currentInput;
}

function appendDot() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        display.innerText = currentInput;
    }
}

function appendOperator(op) {
    if (currentInput !== "") {
        if (firstOperand === null) {
            firstOperand = parseFloat(currentInput);
        } else {
            firstOperand = operate(firstOperand, parseFloat(currentInput), operator);
        }
        currentInput = "";
        operator = op;
        display.innerText = firstOperand;
    }
}

function calculate() {
    if (operator !== null && currentInput !== "") {
        const result = operate(firstOperand, parseFloat(currentInput), operator);
        display.innerText = result;
        firstOperand = result;
        operator = null;
        currentInput = "";
    }
}

function operate(a, b, op) {
    switch (op) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                alert("Don't divide by zero!");
                return a;
            }
            return a / b;
        default:
            return b;
    }
}
