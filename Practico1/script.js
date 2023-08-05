document.getElementById("calculate").addEventListener("click", function () {
    var operand1 = parseFloat(document.getElementById("operand1").value);
    var operand2 = parseFloat(document.getElementById("operand2").value);
    var operator = document.getElementById("operator").value;
    var result = 0;

    switch (operator) {
        case "sum":
            result = operand1 + operand2;
            break;
        case "subtract":
            result = operand1 - operand2;
            break;
        case "multiply":
            result = operand1 * operand2;
            break;
        case "divide":
            result = operand1 / operand2;
            break;
    }

    document.getElementById("result").textContent = "Resultado: " + result;
});
