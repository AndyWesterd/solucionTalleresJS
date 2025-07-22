function conLog(func) {
    return function(...args) {
        console.log(`Ejecutando función con argumentos: [${args}]`);
        const resultado = func(...args);
        console.log(`Resultado: ${resultado}`);
        return resultado;
    };
}

function sumar(a, b) {
    return a + b;
}

const sumarConLog = conLog(sumar);

sumarConLog(3, 4);
sumarConLog(10, 5);