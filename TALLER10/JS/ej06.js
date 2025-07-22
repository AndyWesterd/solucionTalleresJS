const inventario = {
    laptops: 5,
    teclados: 8,
    cables: 3,
    mouse: 25,
    monitores: 15,
};

for (let producto in inventario) {
    let cantidad = inventario[producto];
    if (cantidad < 10) {
        console.log(`REABASTECER: ${producto} (${cantidad})`);
    } else {
        console.log(`BIEN SURTIDO: ${producto} (${cantidad})`);
    }
}