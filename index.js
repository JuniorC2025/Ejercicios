// Comentarios en línea y multilínea

//1.- Este es un comentario en línea

/*
1.- Este es un comentario
multilínea en JavaScript
*/


// 2.- Declarar diferentes tipos de variables y mostrar sus valores
console.log("");

let numero = 42; // Número
const texto = "Hola, Node.js"; // Cadena de texto
let booleano = true; // Booleano
let nulo = null; // Valor nulo
let indefinido; // Valor indefinido

console.log("Número:", numero);
console.log("Texto:", texto);
console.log("Booleano:", booleano);
console.log("Nulo:", nulo);
console.log("Indefinido:", indefinido);


// 3.- Crear un array con al menos cinco elementos de diferentes tipos
console.log("");

let array = [123, "cadena", true, { nombre: "Objeto" }, [1, 2, 3]];
console.log("Array:", array);

// 4.- Escribir una función que tome dos números y aplique una operación
console.log("");

function operar(a, b, operacion) {
    switch (operacion) {
        case "suma":
            return a + b;
        case "resta":
            return a - b;
        case "multiplicacion":
            return a * b;
        case "division":
            return b !== 0 ? a / b : "No se puede dividir entre cero";
        default:
            return "Operación no válida";
    }
}

console.log("Suma:", operar(10, 5, "suma"));
console.log("Resta:", operar(10, 5, "resta"));

// 5.- Crear una función flecha que reciba un string y lo imprima en mayúsculas
console.log("");

const enMayusculas = (texto) => console.log(texto.toUpperCase());

enMayusculas("hola mundo");

// 6.- Implementar un bucle que imprima los números del 1 al 10
console.log("");

for (let i = 1; i <= 10; i++) {
    console.log("Número:", i);
}

// 7.- Crear un objeto que represente un objeto del mundo real con sus propiedades
console.log("");

let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    color: "Rojo",
};

// 8.- Agregar un método al objeto y mostrar su descripción
console.log("");

coche.describir = function () {
    console.log(`Este coche es un ${this.marca} ${this.modelo} del año ${this.año} y es de color ${this.color}.`);
};

coche.describir();

// 9.- Importar y utilizar el módulo de funciones matemáticas
console.log("");

const math = require("./math");

console.log("Suma desde el módulo:", math.sumar(5, 3));
console.log("Resta desde el módulo:", math.restar(10, 4));

// 10.- Simular una operación asincrónica con setTimeout y un callback
console.log("");

function operacionAsincronica(a, b, callback) {
    setTimeout(() => {
        let resultado = a + b;
        callback(resultado);
    }, 2000);
}

operacionAsincronica(3, 7, (resultado) => {
    console.log("Resultado de la operación asincrónica:", resultado);
    console.log("");
});

// 11.- Manejar errores al convertir una cadena a número
console.log("");

try {
    let entrada = "abc";
    let numeroConvertido = Number(entrada);
    if (isNaN(numeroConvertido)) {
        throw new Error("No se puede convertir la cadena a número");
    }
    console.log("Número convertido:", numeroConvertido);
} catch (error) {
    console.error("Error:", error.message);
}
console.log("");