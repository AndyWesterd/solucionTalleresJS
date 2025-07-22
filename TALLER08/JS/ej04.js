let capital = 5000;
let tasa = 3.5 / 100; // Convertir porcentaje a decimal
let tiempo = 2;
const formula = capital * tasa * tiempo;
let montoFinal = formula + capital;

console.log(`Capital inicial: $${capital}`);
console.log(`Tasa de interés: ${(tasa * 100).toFixed(1)}%`);
console.log(`Tiempo: ${tiempo} años`);
console.log(`interes ganado: $${formula.toFixed(0)}`);
console.log(`Monto final: $${montoFinal}`);
