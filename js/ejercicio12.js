
let numero = prompt("Inserta tu edad: ");
numero = parseInt(numero); // Convertir la entrada a número

console.log("La edad insertada es: " + numero);

if (numero > 17) {
    console.log("Es mayor de edad");
} else if (numero > 0 && numero <= 18) {
    console.log("Es menor de edad");
} else {
    console.log("Edad no válida");
}

