const palabra = "programacion";
const vocales = "aeiou";
let contadorVocales = 0;

for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i].toLowerCase();
    if (vocales.includes(letra)) {
        contadorVocales++;
    }
}

console.log(`La palabra "${palabra}" tiene ${contadorVocales} vocales`);