function somar(num1, num2){
    return num1 + num2;

}

function subtrair(num1, num2){
    return num1 - num2;
    
}

function multiplicar(num1, num2){
    return num1 * num2;
    
}

function dividir(num1, num2){
    return num1 / num2;
    
}

function calculadora(num1, num2, funcaoCallback){
    return funcaoCallback(num1, num2);

}

console.log(calculadora(10, 20, multiplicar));
