// Programa para percorrer um array e verificar os numeros que sao pares e os colocar em um novo array 

const original = [1, 4, 12, 21, 53, 88, 112];
const pares = [];

for (let i = 0; i < original.length; i++) {
    if (original[i] % 2 === 0) {
        pares.push(original[i]);
    }
}

console.log(pares);

