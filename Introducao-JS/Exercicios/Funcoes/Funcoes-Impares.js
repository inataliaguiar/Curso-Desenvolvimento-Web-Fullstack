/**
 * 
 * Nesse exercício precisa fazer dentro da função naoPareDeContarImparesAte um for que conte de 0 até um número. 
 * A função deverá retornar a quantidade de números impares que foram encontrados até chegar ao número.
 */


var contagem = 0;
var numerosImpares = [];

function naoPareDeContarImparesAte(numero){
    for(var i=1; i <= numero; i++){
      
      if (i % 2 == 1){
        numerosImpares.push(i);
        contagem++;
      }
      return numerosImpares;
      console.log(numerosImpares);
    }
    
}
 
//console.log(naoPareDeContarImparesAte(3));
naoPareDeContarImparesAte(7);
console.log(contagem);


var resultado = naoPareDeContarImparesAte;