//Programa que soma todos os numeros dentro de um array.

const numeros = [2, 3, 4, 6];
let soma = 0;

//Estrutura de repetição que percorrre do primeiro array ate o ultimo.
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log(soma);
