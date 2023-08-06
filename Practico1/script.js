document.getElementById("calculate").addEventListener("click", function () {
    var operand1 = parseFloat(document.getElementById("operand1").value);
    var operand2 = parseFloat(document.getElementById("operand2").value);
    var operator = document.getElementById("operator").value;
    var result = 0;

    // Validar si los operandos son números válidos y no están vacíos
    if (isNaN(operand1) || isNaN(operand2)) {
        document.getElementById("result").textContent = "Error: Ingresa números válidos en ambos campos";
        return;
    }

    // Realizar operaciones según el operador seleccionado
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
            if (operand2 !== 0) {
                result = operand1 / operand2;
            } else {
                document.getElementById("result").textContent = "Error: No se puede dividir por cero";
                return;
            }
            break;
    }

    // Manejar resultados demasiado grandes o pequeños
    if (!isFinite(result)) {
        document.getElementById("result").textContent = "Error: Resultado fuera de rango";
        return;
    }

    document.getElementById("result").textContent = "Resultado: " + result;
});

document.getElementById("clear").addEventListener("click", function () {
    document.getElementById("operand1").value = "";
    document.getElementById("operand2").value = "";
    document.getElementById("result").textContent = "Resultado: ";
});
