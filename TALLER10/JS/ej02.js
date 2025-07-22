const contraseñaCorrecta = 1007;

for (let intento = 1000; intento <= 1010; intento++) {
    console.log("Probando:", intento);
    if (intento === contraseñaCorrecta) {
        console.log("¡Contraseña encontrada:", intento + "!");
        break;
    }
}