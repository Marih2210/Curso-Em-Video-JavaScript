// Object

let eu = { nome: "Mariana",
idade: "19 anos",
peso: 88,
emagrecer(p=0){
    eu.peso -= p; 
}
}
eu.emagrecer(2);
console.log(`Atualmente ${eu.nome} pesa ${eu.peso}.`);
