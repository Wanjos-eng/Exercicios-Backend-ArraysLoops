//Programa que verifica em uma caixa de disjuntores quais estao ligados

const disjuntores = [false, true, true, false, false, true, false, false, true, true];

for (let i = 0; i < disjuntores.length; i++) {
    if (disjuntores[i]) {
        console.log(i);
    }
}
