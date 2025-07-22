// Función que crea un contador con closure
function crearContador(valorInicial = 0) {
    let contador = valorInicial; 

    return {
        incrementar: function() {
            contador++;
            return contador;
        },
        decrementar: function() {
            contador--;
            return contador;
        },
        obtenerValor: function() {
            return contador;
        },
        reset: function() {
            contador = valorInicial;
            return contador;
        }
    };
}

const contador1 = crearContador();
const contador2 = crearContador(10);

console.log(contador1.obtenerValor());
console.log(contador1.incrementar());
console.log(contador1.incrementar());

console.log(contador2.obtenerValor());
console.log(contador2.decrementar());

console.log(contador1.obtenerValor());