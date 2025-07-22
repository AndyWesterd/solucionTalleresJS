let listaCompras = "pan,leche,huevos,queso,manzanas";
let nummeroProductos = listaCompras.split(",");

console.log("Lista original: " + listaCompras);
console.log("Número de productos: " + nummeroProductos.length);
console.log("Productos:");
console.log("Producto 1: " + nummeroProductos[0]);
console.log("Producto 2: " + nummeroProductos[1]);
console.log("Producto 3: " + nummeroProductos[2]);
console.log("Producto 4: " + nummeroProductos[3]);
console.log("Producto 5: " + nummeroProductos[4]);

let productosGuiones = nummeroProductos.join(" - ");
console.log("Lista con guiones: " + productosGuiones);