function soma(n1=0, n2=0){ // Definir como 0 para que não tenha problema ao realizar a soma quando se passa 
    //apenas 1 parâmetro (NaN).
    let s = n1 + n2
    return `A soma entre os números ${n1} e ${n2} é igual a ${s}`
}
console.log(soma(213, 387));