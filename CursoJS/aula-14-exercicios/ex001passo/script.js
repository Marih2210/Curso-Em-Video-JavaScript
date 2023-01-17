function contar(){
    var inicio = document.getElementById("txtinicio");
    var fim = document.getElementById("txtfim");
    var passos = document.getElementById("txtpasso");
    var iniciar = Number(inicio.value);
    var final = Number(fim.value);
    var contar = Number(passos.value);
    var msg = document.getElementById("resultado");

    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
        alert("Preencha todos os dados corretamente!");
    } else{
        if (contar <= 0){
            alert("[Passos:] --> Número Inválido, auto incremento de +1!");
            contar ++;
        } 
        msg.innerHTML = "Contando: <br><br>"
        if (iniciar < final){
            for(var i = iniciar; i <= final; i += contar){
                msg.innerHTML += `${i} \u{1F449} `;
            }
        }else{
            for(var i = iniciar; i >= final; i -= contar){
                msg.innerHTML += `${i} \u{1F449} `;
            }
        }
        msg.innerHTML += `\u{1F3C1}`
    }



}