function verificar(){
    var ano = document.getElementById("txtano");
    var data = Number(ano.value);
    var msg = document.getElementById("resultado");
    var masc = document.getElementById("m");
    var fem = document.getElementById("f");
    var img = document.getElementById("imagem");
    var year = new Date();
    var atyear = year.getFullYear();

    if (ano.value.length == 0 || data >= atyear){
        alert("Preencha todos os campos corretamente!");
    }else if (!masc.checked && !fem.checked){
        alert("Preencha todos os campos corretamente!");
    }else if (masc.checked && fem.checked){
        alert("Preencha todos os campos corretamente!");
    }else{
        alert("Dados corretos!");
    }

    // MASCULINO

    if (data >= 2018 && data <= 2022 && (masc.checked && !fem.checked)){
        img.src = "imagens/homem/1-5.png";
        msg.innerHTML = `Você é um homem de ${atyear-data} anos.`
    }

    if (data >= 2012 && data <= 2017 && (masc.checked && !fem.checked)){
        img.src = "imagens/homem/6-11.png";
        msg.innerHTML = `Você é um homem de ${atyear-data} anos.`
    }

    if (data >= 2008 && data <= 2011 && (masc.checked && !fem.checked)){
        img.src = "imagens/homem/12-15.png";
        msg.innerHTML = `Você é um homem de ${atyear-data} anos.`
    }

    if (data >= 2006 && data <= 2007 && (masc.checked && !fem.checked)){
        img.src = "imagens/homem/16-17.png";
        msg.innerHTML = `Você é um homem de ${atyear-data} anos.`
    }

    if (data >= 1999 && data <= 2005 && (masc.checked && !fem.checked)){
        img.src = "imagens/homem/18-24.png";
        msg.innerHTML = `Você é um homem de ${atyear-data} anos.`
    }

    if (data >= 1983 && data <= 1998 && (masc.checked && !fem.checked)){
        img.src = "imagens/homem/25-40.png";
        msg.innerHTML = `Você é um homem de ${atyear-data} anos.`
    }

    if (data >= 1973 && data <= 1982 && (masc.checked && !fem.checked)){
        img.src = "imagens/homem/41-50.png";
        msg.innerHTML = `Você é um homem de ${atyear-data} anos.`
    }

    if (data >= 1958 && data <= 1972 && (masc.checked && !fem.checked)){
        img.src = "imagens/homem/51-65.png";
        msg.innerHTML = `Você é um homem de ${atyear-data} anos.`
    }

    if (data >= 1948 && data <= 1957 && (masc.checked && !fem.checked)){
        img.src = "imagens/homem/66-75.png";
        msg.innerHTML = `Você é um homem de ${atyear-data} anos.`
    }

    if (data >= 1938 && data <= 1947 && (masc.checked && !fem.checked)){
        img.src = "imagens/homem/76-85.png";
        msg.innerHTML = `Você é um homem de ${atyear-data} anos.`
    }

    if (data >= 1923 && data <= 1937 && (masc.checked && !fem.checked)){
        img.src = "imagens/homem/86-100.png";
        msg.innerHTML = `Você é um homem de ${atyear-data} anos.`
    }

    // Feminino
    
    if (data >= 2018 && data <= 2022 && (!masc.checked && fem.checked)){
        img.src = "imagens/mulher/1-5.png";
        msg.innerHTML = `Você é uma mulher de ${atyear-data} anos.`
    }

    if (data >= 2012 && data <= 2017 && (!masc.checked && fem.checked)){
        img.src = "imagens/mulher/6-11.png";
        msg.innerHTML = `Você é uma mulher de ${atyear-data} anos.`
    }

    if (data >= 2008 && data <= 2011 && (!masc.checked && fem.checked)){
        img.src = "imagens/mulher/12-15.png";
        msg.innerHTML = `Você é uma mulher de ${atyear-data} anos.`
    }

    if (data >= 2006 && data <= 2007 && (!masc.checked && fem.checked)){
        img.src = "imagens/mulher/16-17.png";
        msg.innerHTML = `Você é uma mulher de ${atyear-data} anos.`
    }

    if (data >= 1999 && data <= 2005 && (!masc.checked && fem.checked)){
        img.src = "imagens/mulher/18-24.png";
        msg.innerHTML = `Você é uma mulher de ${atyear-data} anos.`
    }

    if (data >= 1983 && data <= 1998 && (!masc.checked && fem.checked)){
        img.src = "imagens/mulher/25-40.png";
        msg.innerHTML = `Você é uma mulher de ${atyear-data} anos.`
    }

    if (data >= 1973 && data <= 1982 && (!masc.checked && fem.checked)){
        img.src = "imagens/mulher/41-50.png";
        msg.innerHTML = `Você é uma mulher de ${atyear-data} anos.`
    }

    if (data >= 1958 && data <= 1972 && (!masc.checked && fem.checked)){
        img.src = "imagens/mulher/51-65.png";
        msg.innerHTML = `Você é uma mulher de ${atyear-data} anos.`
    }

    if (data >= 1948 && data <= 1957 && (!masc.checked && fem.checked)){
        img.src = "imagens/mulher/66-75.png";
        msg.innerHTML = `Você é uma mulher de ${atyear-data} anos.`
    }

    if (data >= 1938 && data <= 1947 && (!masc.checked && fem.checked)){
        img.src = "imagens/mulher/76-85.png";
        msg.innerHTML = `Você é uma mulher de ${atyear-data} anos.`
    }

    if (data >= 1923 && data <= 1937 && (!masc.checked && fem.checked)){
        img.src = "imagens/mulher/86-100.png";
        msg.innerHTML = `Você é uma mulher de ${atyear-data} anos.`
    }
}