/** Introdução a Javascript - O objeto date
 * 
 * O objeto date permite realizar diversas operações utilizando a data
 * 
 * getDay: Retorna o dia da semana (começando no domingo com índice 0)
 *    exemplo: dia = domingo -> dataAtual.getDay()- retorna indice 0
 * getDate(): retorna o dia do mês atual
 * getMonth(): Retorna o mês, porém a contagem se inicia no índice 0
 * Instância para criar data expecífica -> let meuAniversario = new Date(1999, 01, 11) - Formado ano, mês, dia
 * 
 */

 //Criação de uma variável para insatnciar a data
 const data = new Date();

 let aniversario = new Date(1999, 0, 12);

console.log("Data atual: " + data.getDate());
console.log("Dia da semana: " + data.getDay());
console.log("Mês: " + data.getMonth() + 1);
console.log("O ano é: " + data.getFullYear());
console.log("Data completa: " + data);
console.log("Data do meu aniverário: " + aniversario);




