//Programa que diz se em um array contem um certo tipo de letra minuscula ou maiuscula.

const letras = ["A", "e", "B", "C", "E", "z"];
let contador = 0;

for (let i = 0; i < letras.length; i++) {
    if (letras[i] === "E" || letras[i] === "e") {
        contador++;
    }
}

if (contador === 0) {
    console.log("Nenhuma letra 'E' ou 'e' foi encontrada.");
} else if (contador === 1) {
    console.log(`Foi encontrada ${contador} letra 'E' ou 'e'`);
} else {
    console.log(`Foram encontradas ${contador} letras 'E' ou 'e'.`);
}

