let numFactura = "7";
let codProducto = "42";
let idUsuario = "123";

let factura = "F-" + numFactura.padStart(3, "0");
let producto =  "PROD-" + codProducto.padStart(4, "0");
let usuario = "USER-" + idUsuario.padStart(5, "0");
let separador = "-".repeat(30);
let oferta = "¡OFERTA!".repeat(3);

console.log("Factura: " + factura);
console.log("Producto: " + producto);
console.log("Usuario: " + usuario);
console.log(separador);
console.log(oferta);