const calificaciones = [8.5, 4.2, 7.0, 5.8, 9.2, 6.5, 3.9, 8.1];
let aprobados = 0;
let reprobados = 0;

for (let i = 0; i < calificaciones.length; i++) {
    if (calificaciones[i] >= 6) {
        aprobados++;
    } else {
        reprobados++;
    }
}

console.log("Estudiantes aprobados:", aprobados);
console.log("Estudiantes reprobados:", reprobados);