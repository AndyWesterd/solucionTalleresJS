const numero = 17;
let esPrimo = true;

console.log("Verificando divisibilidad...");

if (numero <= 1) {
    esPrimo = false;
} else {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
}

if (esPrimo) {
    console.log(`El número ${numero} ES primo`);
} else {
    console.log(`El número ${numero} NO es primo`);
}