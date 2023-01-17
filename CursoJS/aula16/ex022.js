// Número par ou ímpar

function parimp(n){
    if (n % 2 == 0){
        console.log(`O número ${n} é par!`);
    } else{
        console.log(`O número ${n} é ímpar!`)
    }
}
parimp(3);

/*
function parimp2(n){
    if (n % 2 == 0){
        return `O número ${n} é par!`;
    } else{
        return `O número ${n} é ímpar!`;
    }
}
let resp = parimp2(3);
console.log(resp);
*/