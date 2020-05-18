/** Introdução a Javascript - Operadores.
 * 
 * Permitem manipular, comparar e realizar operações com as variáveis.
 * 
 * Operadores Aritméticos: Permitem fazer operações matemáticas.
 * Soma(+): 10 + 15.
 * Subtração(-): 30 – 15.
 * Multiplicação(*): 10 * 15.
 * Divisão(/): 10 / 2.
 *
 * Incremento(++): 15++  15 + 1 = 16.
 * Decremento(--): 15--  15 - 1 = 14.
 * Módulo(%): retorna o resto de uma divisão  15 % 2 = 1.
 * 
 * Operadores de comparação: Realizam a comparação entre ” trechos”.
 * Simples: Compara dois valores.
 * Igual(==): 10 == 15 -> false.
 * Diferente(!=): 10 != 15 -> true.
 * 
 * Estrita: Compara o valor e o tipo de dado.
 * 10 === "10" -> false.
 * 10 !== 15 -> true.
 *
 */

 //Exemplos

 var soma = 10 + 20;
 var subtracao = 10 - 20;
 var multiplicacao = 10 * 20;
 var divisao = 10 / 20;

 //Exibindo os resultados
 console.log("-----------------Operações básicas-----------------------");
 console.log("Resultado da soma: " + soma);
 console.log("Resultado da subtração: " + subtracao);
 console.log("Resultado da multiplicação: " + multiplicacao);
 console.log("Resultado da divisão: " + divisao);

//Mais exemplos
 console.log("-----------------Incremento e Decremento-----------------------");

 var numero = 10;
 console.log("Valor número: " + numero);
 
 numero ++;
 console.log("Resultado após incremento: " + numero);

 numero --;
 console.log("Resultado após decremento: " + numero);

 console.log("-----------------Operadores de comparação-----------------------");
 console.log("10 é maior que 20? " + (10 > 20));
 console.log("10 é maior que 5? " + (10 > 5));
 console.log("10 é igual a 10? " + (10 == 10));
 console.log("50 é menor que 500? " + (50 < 500));
 console.log("33 menor ou igual a 33? " + (33 == 33));
 

 