
function crearContadorPersonalizado(inicial) {
    let contador = inicial;

    return function() {
        contador++;
        return contador;
    };
    
};

const contador10 = crearContadorPersonalizado(10);
console.log(contador10());
console.log(contador10());
const contador100 = crearContadorPersonalizado(100);
console.log(contador100());