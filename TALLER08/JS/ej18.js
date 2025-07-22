let textoNumero = "42";
let numeroZero = 0;

console.log('Valor original: "' + textoNumero + '"');
console.log("Con Number(): " + Number(textoNumero));
console.log("Con +: " + (+textoNumero));
console.log("Con parseInt(): " + parseInt(textoNumero));
console.log("Con Boolean(): " + Boolean(textoNumero));
console.log("Con !!: " + (!!textoNumero));

console.log("\nValor 0 como string: " + '"' + String(numeroZero) + '"');
console.log("Valor 0 como booleano: " + Boolean(numeroZero));