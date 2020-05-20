/** Introdução a Javascript - Arrow funcions
 * 
 * As arrow Functions permitem escrever funções de forma mais sucinta/compacta
 * 
 * Estrutura comum:
 * function somar (a, b){
 *  return a + b;
 * 
 * }
 * 
 * Estrutura com Arrow Function
 *  Com mais de um parâmetro (entre parentêses ):
 *  var somar = (a, b) => a + b;
 * 
 *  Com um parâmetro (se parâmetros):
 *  var dobro = a => a * 2
 * 
 */

 //Exemplos

 let somar = (a, b) => a + b;

 //Exibindo o resultado da função
 console.log(somar(10, 20));
 

 let elevarNum1aNum2 = (numero1, numero2) => Math.pow(numero1, numero2);
 console.log(elevarNum1aNum2(10, 2));
 
let exibirMensagem = () => "Olá, estamos exibindo esta mensagem utilizando arrow functions!"
console.log(exibirMensagem());
