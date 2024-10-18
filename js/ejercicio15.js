let numero = prompt("Inserta un número: ");
numero = parseInt(numero); // Convertir la entrada a número

if (isNaN(numero)) {
    console.log("Error: No has ingresado un número válido.");
} else {
    console.log("El número insertado es: " + numero);
}



