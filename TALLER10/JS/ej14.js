const ventas = [100, 120, 130, 125, 140, 150, 160, 155, 170, 180];
let rachaActual = 1;
let mejorRacha = 1;
let inicioMejorRacha = 0;
let inicioRachaActual = 0;

for (let i = 1; i < ventas.length; i++) {
    if (ventas[i] > ventas[i-1]) {
        rachaActual++;
    } else {
        if (rachaActual > mejorRacha) {
            mejorRacha = rachaActual;
            inicioMejorRacha = inicioRachaActual;
        }
        rachaActual = 1;
        inicioRachaActual = i;
    }
}

if (rachaActual > mejorRacha) {
    mejorRacha = rachaActual;
    inicioMejorRacha = inicioRachaActual;
}

let ventasMejorRacha = [];
for (let i = inicioMejorRacha; i < inicioMejorRacha + mejorRacha; i++) {
    ventasMejorRacha.push(ventas[i]);
}

console.log(`Mayor racha de crecimiento: ${mejorRacha} días consecutivos (días ${inicioMejorRacha + 1}-${inicioMejorRacha + mejorRacha})`);
console.log("Ventas en esa racha:", ventasMejorRacha);