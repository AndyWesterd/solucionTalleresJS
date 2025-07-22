const numeros = [150, -80, 200, -45, 300, 120, -30, 250, -100, 180];
let diasConGanancias = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
        diasConGanancias++;
    }
}

console.log("Total de días con ganancias:", diasConGanancias);
 