let texto =  "Me gusta Python. Python es facil. Python es rapido.";
let textoCorregido = texto.replaceAll("Python", "JavaScript").replace("facil", "fácil").replace("rapido", "rápido");
console.log("Texto original: " + texto);
console.log("Texto corregido: " + textoCorregido);