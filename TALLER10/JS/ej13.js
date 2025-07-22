const limite = 30;
const numerosPerfectos = [];

for (let num = 1; num < limite; num++) {
    let divisores = [];
    let sumaDivisores = 0;
    
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            divisores.push(i);
            sumaDivisores += i;
        }
    }

    if (sumaDivisores === num && divisores.length > 0) {
        console.log(`Verificando número ${num}: Divisores [${divisores.join(", ")}], Suma: ${sumaDivisores} - ES PERFECTO`);
        numerosPerfectos.push(num);
    }
}

console.log("Números perfectos encontrados:", numerosPerfectos);