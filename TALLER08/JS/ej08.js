let texto = " Aprender JavaScript es muy Divertido ";

console.log("Longitud original: " + texto.length);

let textoLimpio = texto.trim();

console.log("Longitud limpia: " + textoLimpio.length);

let textoEnMayusculas = textoLimpio.toUpperCase();

console.log("Texto en mayúsculas: " + textoEnMayusculas);

let textoEnMinusculas = textoLimpio.toLowerCase();

console.log("Texto en minúsculas: " + textoEnMinusculas);

console.log("Primer caracter: " + textoEnMayusculas.charAt(0));

console.log("Último caracter: " + textoEnMinusculas.charAt(textoEnMinusculas.length - 1));
