//Programa que verifica se existe um certo numero e diz em qual poisicao do array ele esta

const numeros = [54, 22, 14, 10, 284];
let posicao = -1;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 10) {
        posicao = i;
        break; // Se encontrar o 10, pode sair do loop
    }
}

console.log(posicao);

