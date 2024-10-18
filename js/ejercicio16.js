let palabra = prompt("Ingresa una palabra: ").toLowerCase(); // Convertir a minúsculas

// Invertir la palabra
let palabraInvertida = palabra.split('').reverse().join('');

// Comparar la palabra original con la invertida
if (palabra === palabraInvertida) {
    console.log("La palabra es un palíndromo.");
} else {
    console.log("La palabra no es un palíndromo.");
}
