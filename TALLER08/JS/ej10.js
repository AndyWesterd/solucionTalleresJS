let cadena = "Juan Carlos Pérez González";
console.log("Primer nombre: " + cadena.substring(0, 4));
console.log("Segundo nombre: " + cadena.slice(5, 11));
console.log("Apellidos: " + cadena.slice(12, 26));
console.log("Ultimas 8 letras: " + cadena.substring(cadena.length - 8));
console.log("Solo Pérez: " + cadena.substring(12, 17));