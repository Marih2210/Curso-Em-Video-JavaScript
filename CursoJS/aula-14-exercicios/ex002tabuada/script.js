function tabuada(){
    let numero = document.getElementById ("txtn");
    let select = document.getElementById("selec");
    let num = Number(numero.value);
    
    if (numero.value.length == 0){
        alert("Digite um número!");
    }else{
        select.innerHTML = "";
        for (let i = 0; i<=10; i++){
            let item = document.createElement('option')
            item.text = `${num} x ${i} = ${num*i}`
            select.appendChild(item);
        }
    }
}