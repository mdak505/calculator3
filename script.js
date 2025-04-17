let display = document.getElementById('display');
let currentNumber = '';
let firstOperand = null;
let operator = null;
let newNumber = true;

function appendNumber(num) {
    if (newNumber) {
        currentNumber = num;
        newNumber = false;
    } else {
        currentNumber += num;
    }
    display.value = currentNumber;
}

function appendDecimal() {
    if (!currentNumber.includes('.')) {
        currentNumber += currentNumber === '' ? '0.' : '.';
        display.value = currentNumber;
        newNumber = false;
    }
}

function clearDisplay() {
    currentNumber = '';
    firstOperand = null;
    operator = null;
    newNumber = true;
    display.value = '0';
}

function deleteLast() {
    currentNumber = currentNumber.slice(0, -1);
    if (currentNumber === '') {
        clearDisplay();
    } else {
        display.value = currentNumber;
    }
}

function appendOperator(op) {
    if (operator !== null && !newNumber) {
        calculate();
    }
    firstOperand = parseFloat(currentNumber);
    operator = op;
    newNumber = true;
}

function calculate() {
    if (operator === null || newNumber) return;
    
    let secondOperand = parseFloat(currentNumber);
    let result;
    
    switch(operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                clearDisplay();
                display.value = 'Error';
                return;
            }
            result = firstOperand / secondOperand;
            break;
    }
    
    currentNumber = result.toString();
    display.value = currentNumber;
    operator = null;
    firstOperand = null;
    newNumber = true;
}

// Initialize display
clearDisplay();