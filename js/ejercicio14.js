
let celsius = prompt("Ingresa la temperatura en grados Celsius: ");
celsius = parseFloat(celsius); // Convertir la entrada a un número decimal

// Convertir Celsius a Fahrenheit
let fahrenheit = (celsius * 9/5) + 32;

console.log(celsius + " grados Celsius son " + fahrenheit + " grados Fahrenheit.");
