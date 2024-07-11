//Programa que soma todos os numeros pares dentro de um array.

const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let somaDosPares = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) { // verifica se o numero e par
        somaDosPares += numeros[i]; // adiciona o numero par a soma
    }
}

console.log(somaDosPares);
