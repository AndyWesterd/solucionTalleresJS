const texto = "JavaScript es un lenguaje de programacion muy popular";
let palabras = 1;

for (let i = 0; i < texto.length; i++) {
    if (texto[i] === " ") {
        palabras++;
    }
}

console.log("El texto tiene", palabras, "palabras");