//Programa que faz a comparacao entre componentes de dois arrays e imprime o menor valor encontrado

const arrayA = [1, 3, 3, 44, 11];
const arrayB = [57, 4, 21, 32, 13];

for (let i = 0; i < arrayA.length; i++) {
    console.log(Math.min(arrayA[i], arrayB[i]));
}

