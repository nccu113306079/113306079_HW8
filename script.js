js_content = 
function calculate() {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const operator = document.getElementById("operator").value;
    const resultDiv = document.getElementById("result");

    if (isNaN(number1) || isNaN(number2)) {
        resultDiv.textContent = "Please enter valid numbers.";
        return;
    }

    let result;

    switch (operator) {
        case "+":
            result = add(number1, number2);
            break;
        case "-":
            result = subtract(number1, number2);
            break;
        case "*":
            result = multiply(number1, number2);
            break;
        case "/":
            if (number2 === 0) {
                resultDiv.textContent = "Error: Division by zero is not allowed.";
                return;
            }
            result = divide(number1, number2);
            break;
        default:
            resultDiv.textContent = "Invalid operator selected.";
            return;
    }

    resultDiv.textContent = `Result: ${result.toFixed(2)}`;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


# Save files to the appropriate paths
html_path = "/mnt/data/calculator.html"
css_path = "/mnt/data/style.css"
js_path = "/mnt/data/script.js"

with open(html_path, "w") as html_file:
    html_file.write(html_content)

with open(css_path, "w") as css_file:
    css_file.write(css_content)

with open(js_path, "w") as js_file:
    js_file.write(js_content)

html_path, css_path, js_path