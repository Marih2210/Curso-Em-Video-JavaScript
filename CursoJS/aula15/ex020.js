// Exibição do Vetor com for in

let num = [1, 5, 7, 9, 3];
num.sort();
for (let pos in num){ // Para cada posição em num
    console.log(`A posição ${pos} tem o valor: ${num[pos]}`);
}