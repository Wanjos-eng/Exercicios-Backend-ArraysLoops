//Programa que cria um novo array que guarda informacoes especificas de outro array

const original = [10, 11, 12, 13, 14, 15, 16, 21, 22, 100, 200, 300, 400, 5000000];
const novoArray = [];

for (let i = 0; i < original.length; i++) {
    if ((original[i] >= 10 && original[i] <= 20) || original[i] > 100) {
        novoArray.push(original[i]);
    }
}

console.log(novoArray);
