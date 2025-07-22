let a1 = 5, b1 = "5";
let a2 = true, b2 = 1;
let a3 = false, b3 = 0;
let a4 = null, b4 = undefined;
let a5 = "", b5 = 0;

console.log("Comparando " + a1 + ' y "' + b1 + '":');
console.log("- Con == (con conversión): " + (a1 == b1));
console.log("- Con === (sin conversión): " + (a1 === b1));

console.log("\nComparando " + a2 + " y " + b2 + ":");
console.log("- Con == (con conversión): " + (a2 == b2));
console.log("- Con === (sin conversión): " + (a2 === b2));

console.log("\nComparando " + a3 + " y " + b3 + ":");
console.log("- Con == (con conversión): " + (a3 == b3));
console.log("- Con === (sin conversión): " + (a3 === b3));

console.log("\nComparando " + a4 + " y " + b4 + ":");
console.log("- Con == (con conversión): " + (a4 == b4));
console.log("- Con === (sin conversión): " + (a4 === b4));

console.log('\nComparando "' + a5 + '" y ' + b5 + ':');
console.log("- Con == (con conversión): " + (a5 == b5));
console.log("- Con === (sin conversión): " + (a5 === b5));