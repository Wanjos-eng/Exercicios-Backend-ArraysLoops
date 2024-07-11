//Programa que verifica e separa os nomes encontrados com a inicial 'a' ou 'A'.

const nomes = ["Ana", "Joana", "Carlos", "amanda"];
const nomesComA = [];

for (let i = 0; i < nomes.length; i++) {
    if (nomes[i][0].toLowerCase() === 'a') { // toLowerCase converte uma string para minuscula para analisar esse caso que nao tem distincao de maisculo ou minusculo.
        nomesComA.push(nomes[i]); // Adiciona o nome ao novo array
    }
}

console.log(nomesComA);
