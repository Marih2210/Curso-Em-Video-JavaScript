// Função fatorial 1

function fat(n){
    let i;
    let fatorial = 1;
    for (i=n; i>1; i--){
        fatorial *= i; 
    }
    return fatorial;
}
console.log(fat(5));