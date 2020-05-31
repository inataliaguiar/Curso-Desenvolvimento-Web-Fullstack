/** Introdução a Javascript - Métodos de arrays parte II
 * 
 * Review de Callback:
 * 
 * .Map(): É utilizado para aplicar uma função específica a todos os elementos do Array
 * .Filter(): É responsável por filtrar cada elemento do array de acordo com uma lógica e retorna um novo array somente com os elementos que atendem a condição especificada
 * .forEach(): É responsável por iterar um array e recebe um callback como parâmetro  
 * 
 */ 


/*Método Map*/

let numeros = [1,2,3];

let somarDez = numeros.map(function (umNumero){ 
    return umNumero + 10;
});

console.log(somarDez);


/* Método Filter */

let idades = [10, 20, 18, 17, 90, 5, 11, 4, 6, 19];

let maiores = idades.filter(function (idadePermitida){
    return idadePermitida >= 18;
});

console.log(maiores);


//Reduce 
//forEach






 
