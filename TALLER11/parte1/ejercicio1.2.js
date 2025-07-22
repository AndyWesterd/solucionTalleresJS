
function calcularDescuento(precio, descuento = 10) {
    let formula = precio - (precio * descuento / 100);
    return console.log("El precio final es: " + formula);    
}

console.log(calcularDescuento(100));
console.log(calcularDescuento(100, 20));