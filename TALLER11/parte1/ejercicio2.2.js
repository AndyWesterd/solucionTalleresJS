
const contarRegresivo = function contar(n) {

    if (n <= 0) {
        return [];
    }
    return [n].concat(contar(n-1));
};

console.log(contarRegresivo(5));
console.log(contarRegresivo(3));