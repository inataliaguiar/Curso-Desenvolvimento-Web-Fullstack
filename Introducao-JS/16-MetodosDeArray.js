/** Introdução a Javascript - Métodos de arrays parte I
 * 
 * Os métodos em arrays permitem trabalhar com as informações presentes em um array de diversas formas
 * 
 * .push(): adiciona um ou mais elementos passados por parâmetro no final do array 
 * .pop(): retira sempre o último elemento do array e retorna sempre o elemento eliminado
 * .shift(): retira sempre o primeiro elemento do array e retorna sempre o elemento eliminado
 * .unshift(): adiciona os elementos passados por parâmetro no inicio do array 
 * .join(): junta os elementos de um array usando o separador que foi especificado e retorna uma string com os elementos unidos
 * .indexOf(): procura um elemento que recebeu como parâmetro e retorna seu respectivo índice
 * .lastIndexOf(): procura o elemento que recebeu como parâmetro e retorna o índice, porém inicia a busca de trás para a frente
 * .includes(): realiza uma busca no array e retorna true se encontrar o elemento ou false caso não encontre 
 */

/*Exemplos: */
var posicoes = ["Primeiro", "Segundo"];
console.log();

console.log("Array posicoes antes da inserção de novos elementos: " + posicoes + "\n");

posicoes.push("Terceiro", "Quarto", "Quinto"); //Método push para adicionar elementos ao array
console.log("Array posicoes após a inserção de novos elementos: " + posicoes + "\n");

posicoes.pop(); //Método pop para remover o último elemento do array
console.log("Array posicoes após a remoção do último elemento: " + posicoes + "\n");

posicoes.shift(); //Método shift para remover o primeiro elemento do array
console.log("Array posicoes após a remoção do primeiro elemento: " + posicoes + "\n");

var dispositivos = ["Notebook"];
dispositivos.unshift("Smartphone"); //Método unshift para adicionar elementos no inicio do array

var diasDaSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
console.log(diasDaSemana.join(" - ")); //Método join junta os elementos do array separando eles por traço

console.log(diasDaSemana.join("-feira ")); //Junta os elementos do array acrescentando "-feira"
console.log(diasDaSemana.indexOf("Sexta")); //Retorna o índice do array correspondente ao parâmetro especificado
console.log(diasDaSemana.lastIndexOf("Sexta")); //Começa a contagem de trás para frente e retorna o índice do array correspondente ao parâmetro especificado
console.log(diasDaSemana.includes("Segunda")); //Retorna true se encontrar o elemento ou false caso não encontre
