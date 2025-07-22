function calcularPromedio(...numeros) {
    let suma = 0;
    for (let numero of numeros) {
        suma += numero;
    }
    return suma / numeros.length;
}

console.log(calcularPromedio(10, 20, 30)); // 20
console.log(calcularPromedio(5, 15, 25, 35)); // 20