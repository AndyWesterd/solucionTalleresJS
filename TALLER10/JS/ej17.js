const inicio = 100;
const fin = 150;
const palindromos = [];
for (let num = inicio; num <= fin; num++) {
    let numStr = num.toString();
    let esPolindromo = true;
    for (let i = 0; i < numStr.length / 2; i++) {
        if (numStr[i] !== numStr[numStr.length - 1 - i]) {
            esPolindromo = false;
            break;
        }
    }
    if (esPolindromo) {
        console.log(`Verificando ${num}: SÍ es palíndromo`);
        palindromos.push(num);
    }
}
console.log("Palíndromos encontrados:", palindromos);
  