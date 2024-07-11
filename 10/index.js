//Programa que calcula a mmaior diferença entre dois numeros de um array

const numeros = [8, 11, 4, 1];

let menorNumero = numeros[0];
let maiorNumero = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menorNumero) {
        menorNumero = numeros[i];
    }
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
}

console.log(maiorNumero);
console.log(menorNumero);

const maiorDiferenca = maiorNumero - menorNumero;

console.log(maiorDiferenca);
