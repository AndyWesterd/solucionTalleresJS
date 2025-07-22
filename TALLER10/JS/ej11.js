const votos = ["Ana", "Carlos", "Ana", "María", "Carlos", "Ana", "Luis", "María", "Carlos", "Ana"];
const conteoVotos = {};

for (let i = 0; i < votos.length; i++) {
    let candidato = votos[i];
    if (conteoVotos[candidato]) {
        conteoVotos[candidato]++;
    } else {
        conteoVotos[candidato] = 1;
    }
}

let ganador = "";
let maxVotos = 0;

for (let candidato in conteoVotos) {
    console.log(`${candidato}: ${conteoVotos[candidato]} votos`);
    if (conteoVotos[candidato] > maxVotos) {
        maxVotos = conteoVotos[candidato];
        ganador = candidato;
    }
}

console.log(`Ganador: ${ganador} con ${maxVotos} votos`);