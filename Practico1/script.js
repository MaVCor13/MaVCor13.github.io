document.getElementById("calculate").addEventListener("click", function () {
    var operand1 = parseFloat(document.getElementById("operand1").value);
    var operand2 = parseFloat(document.getElementById("operand2").value);
    var operator = document.getElementById("operator").value;
    var result = 0;
    // Función para validar un número
function esNumeroValido(numero) {
    return !isNaN(numero) && numero !== '';
}

// Event listener para el botón "Calcular"
document.getElementById("calculate").addEventListener("click", function () {
    var operand1 = document.getElementById("operand1").value;
    var operand2 = document.getElementById("operand2").value;
    var operator = document.getElementById("operator").value;
    var result = '';

    // Validar operandos
    if (!esNumeroValido(operand1) || !esNumeroValido(operand2)) {
        result = "Error: Ingresa valores numéricos válidos en ambos campos";
    } else {
        // Convertir operandos a números si son válidos
        operand1 = parseFloat(operand1);
        operand2 = parseFloat(operand2);

        // Realizar la operación correspondiente
        switch (operator) {
            case "sum":
                result = sumar(operand1, operand2);
                break;
            case "subtract":
                result = restar(operand1, operand2);
                break;
            case "multiply":
                result = multiplicar(operand1, operand2);
                break;
            case "divide":
                result = dividir(operand1, operand2);
                break;
        }
    }

    document.getElementById("result").textContent = "Resultado: " + result;
});

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
// Función para sumar dos números
function sumar(a, b) {
    return a + b;
}

// Función para restar dos números
function restar(a, b) {
    return a - b;
}

// Función para multiplicar dos números
function multiplicar(a, b) {
    return a * b;
}

// Función para dividir dos números
function dividir(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error: No se puede dividir por cero";
    }
}

// Event listener para el botón "Calcular"
document.getElementById("calculate").addEventListener("click", function () {
    var operand1 = parseFloat(document.getElementById("operand1").value);
    var operand2 = parseFloat(document.getElementById("operand2").value);
    var operator = document.getElementById("operator").value;
    var result = 0;

    switch (operator) {
        case "sum":
            result = sumar(operand1, operand2);
            break;
        case "subtract":
            result = restar(operand1, operand2);
            break;
        case "multiply":
            result = multiplicar(operand1, operand2);
            break;
        case "divide":
            result = dividir(operand1, operand2);
            break;
    }

    document.getElementById("result").textContent = "Resultado: " + result;
});

