
let numero = prompt("Inserta un numero: ");
numero = parseInt(numero); // Convertir la entrada a número

console.log("El numero insertada es: " + numero);

if (numero % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}