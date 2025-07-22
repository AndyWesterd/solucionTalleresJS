function miForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

const letras = ['a', 'b', 'c'];

miForEach(letras, (elemento, indice) => {
    console.log(`Elemento: ${elemento}, Índice: ${indice}`);
});

miForEach(letras, (elemento, indice, array) => {
    console.log(`${elemento} en posición ${indice} de [${array}]`);
});