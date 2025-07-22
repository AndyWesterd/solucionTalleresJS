function crearCuentaBancaria(saldoInicial) {
    let saldo = saldoInicial;
    return {
        depositar: function(cantidad) {
            saldo += cantidad;
        },
        retirar: function(cantidad) {
            saldo -= cantidad;
        },
        consultarSaldo: function(){
            return saldo;
        }
    }
}

const cuenta = crearCuentaBancaria(1000);
console.log(cuenta.consultarSaldo()); // 1000
cuenta.depositar(500);
console.log(cuenta.consultarSaldo()); // 1500
cuenta.retirar(200);
console.log(cuenta.consultarSaldo()); // 1300