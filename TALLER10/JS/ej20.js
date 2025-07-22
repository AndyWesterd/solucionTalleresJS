const cantidad = 15;
const fibonacci = [];
const numerosPares = [];

fibonacci[0] = 0;
fibonacci[1] = 1;

if (fibonacci[0] % 2 === 0) {
    numerosPares.push(fibonacci[0]);
}
if (fibonacci[1] % 2 === 0) {
    numerosPares.push(fibonacci[1]);
}

for (let i = 2; i < cantidad; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    
    if (fibonacci[i] % 2 === 0) {
        numerosPares.push(fibonacci[i]);
    }
}
console.log("Secuencia Fibonacci:", fibonacci);
console.log("Números pares en la secuencia:", numerosPares);