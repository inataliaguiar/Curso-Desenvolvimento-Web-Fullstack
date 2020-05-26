function dobro(numero){
    return numero * 2;
}

function triplo (numero){
    return numero * 3;
}

function aplicar(numero, funcaoCallback){
    return funcaoCallback(numero);

}

var resultado = aplicar(10, dobro);
console.log(resultado);
