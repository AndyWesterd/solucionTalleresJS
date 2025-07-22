const crearEstudiante = (nombre, nota) => ({nombre, nota, aprobado: nota >= 60 ? true : false})

console.log(crearEstudiante("Luis", 75));
console.log(crearEstudiante("Ana", 45));