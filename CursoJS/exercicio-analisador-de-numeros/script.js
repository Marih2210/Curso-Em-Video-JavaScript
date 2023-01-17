let numero = document.getElementById ("txtn");
let lista = document.getElementById("lista");
let res = document.querySelector("div#resultado");
let armazenar = [];

function isNum(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    }else{
        return false;
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    }else{
        return false;
    }
}

function adicionar(){
    if(isNum(numero.value) && !inList(numero.value, armazenar)){
        armazenar.push(Number(numero.value));
        let item = document.createElement('option')
        item.text = `Número ${numero.value} adicionado.`
        lista.appendChild(item);
    }else{
        alert("Valor inválido ou já existente!");
    }
    numero.value = '';
    numero.focus();
}

function finalizar(){
    if(armazenar.length == 0){
        alert("Não é possível prosseguir!");
    }else{
        let soma = 0;
        let total = armazenar.length;

        for(let pos = 0; pos < armazenar.length; pos++ ){
            let valor = armazenar[pos];
            soma += valor; 
            media = soma/armazenar.length;
            maior = Math.max(...armazenar);
            menor = Math.min(...armazenar);
        }

        res.innerHTML = "";
        res.innerHTML += `[TOTAL]: Ao todo foram adicionados ${total} números na lista. <br>`;
        res.innerHTML += `[SOMA]: A soma entre os números da lista é ${soma}. <br>`;
        res.innerHTML += `[MÉDIA]: A média entre os números da lista é ${media.toFixed(2)}. <br>`;
        res.innerHTML += `[MAIOR]: O maior, entre os números da lista, é ${maior}. <br>`;
        res.innerHTML += `[MENOR]: O menor, entre os números da lista, é ${menor}.`;
    }
}

