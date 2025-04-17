let dados = [97, 45, 49, 32, 2, 5, 9, 99, 1, 7];

let ordenado = false;
let rodada = 1;

do {
    ordenado = true;
    console.log(`Rodada ${rodada++}:`);

    for (let i = 0; i < dados.length - 1; i++) {
        if (dados[i] > dados[i + 1]) {
            console.log(`[${dados[i]}] é maior que [${dados[i + 1]}]. Realizando inversão...`);
            let aux = dados[i];
            dados[i] = dados[i + 1];
            dados[i + 1] = aux;
            ordenado = false;
        }
    }

    console.table(dados); // Mostra o array após cada rodada
} while (!ordenado);

console.log("Array final ordenado:");
console.log(dados);

