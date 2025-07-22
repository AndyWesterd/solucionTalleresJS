const numeros = [3, 7, 9];
const limite = 6;

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    console.log(`Tabla del ${numero}:`);
    
    for (let j = 1; j <= limite; j++) {
        console.log(`${numero} x ${j} = ${numero * j}`);
    }
    
    console.log("");
}