/** Introdução a Javascript - Métodos de arrays parte II
 * 
 * Review de Callback:
 * 
 * .Map(): É utilizado para aplicar uma função específica a todos os elementos do Array
 * .Filter(): É responsável por filtrar cada elemento do array de acordo com uma lógica e retorna um novo array somente com os elementos que atendem a condição especificada
 * .forEach(): É responsável por iterar um array e recebe um callback como parâmetro  
 * 
 */ 


 //Exemplo de utilização MAP: Adicionar  10 a cada elemento de um array 

let numeros = [1,2,3];

//Modo 1 - Callback
let somarDez = numeros.map(function (umNumero){ 
    return umNumero + 10;
});

console.log(somarDez);

//Modo 2

function aoQuadrado(numero){
   return numero ** 2; 
}

var arrayNumeros = [2, 4, 6];

console.log(arrayNumeros.map(aoQuadrado));


//Filter

let idades = [10, 20, 18, 17, 90, 5, 11, 4, 6, 19];

let maiores = idades.filter(function (idadePermitida){
    return idadePermitida >= 18;
});

console.log(maiores);


//forEach

let numerosPares = [2, 4, 6, 8, 10];

let numerosParesDobrados = numerosPares.map(function (valorDobrado){
    return valorDobrado * 2;
    
});

console.log(numerosParesDobrados);






 
