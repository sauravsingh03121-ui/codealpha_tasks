let display = document.getElementById('display');
let expression = '';

function updateDisplay() {
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    updateDisplay();
}

function appendNumber(number) {
    expression += number;
    updateDisplay();
}

function appendOperator(op) {
    expression += op;
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(expression.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-'));
        expression = result.toString();
        updateDisplay();
    } catch {
        expression = 'Error';
        updateDisplay();
    }
}

function appendDecimal() {
    // Simple check: don't add decimal if last number already has one
    const lastNum = expression.split(/[\+\-\*\/]/).pop();
    if (lastNum.includes('.')) return;
    expression += '.';
    updateDisplay();
}

function backspace() {
    expression = expression.slice(0, -1);
    updateDisplay();
}

// Event listeners for buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (button.classList.contains('number')) {
            appendNumber(value);
        } else if (button.classList.contains('operator')) {
            appendOperator(value);
        } else if (button.classList.contains('equals')) {
            calculate();
        } else if (button.classList.contains('clear')) {
            clearDisplay();
        } else if (button.classList.contains('decimal')) {
            appendDecimal();
        } else if (button.classList.contains('backspace')) {
            backspace();
        }
    });
});

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        appendNumber(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendOperator(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearDisplay();
    } else if (key === '.') {
        appendDecimal();
    } else if (key === 'Backspace') {
        backspace();
    }
});
