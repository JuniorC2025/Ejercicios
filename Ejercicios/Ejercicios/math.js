// Crear un módulo que contenga funciones matemáticas básicas
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return b !== 0 ? a / b : "No se puede dividir entre cero";
}

// Exportar las funciones
module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir,
};
