
function presentarPersona({nombre, edad, ciudad = "No especificada"}) {
    console.log(`${nombre}, ${edad} años, vive en ${ciudad}`);
}

presentarPersona({nombre: "María", edad: 25, ciudad: "Madrid"});
presentarPersona({nombre: "Pedro", edad: 30});