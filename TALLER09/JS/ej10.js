let numero = 9876; 
let digitos = 0; 
do { 
    numero = Math.floor(numero / 10);
    digitos ++
} while (numero > 0);
console.log(`El número 9876 tiene ${digitos} digitos`);