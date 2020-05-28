/** Introdução a Javascript - Métodos de arrays parte I
 * 
 * Os métodos em arrays permitem trabalhar com as informações presentes em um array de diversas formas
 * 
 * .push(): adiciona um ou mais elementos passados por parâmetro no final do array 
 * .pop(): retira sempre o último elemento do array e retorna sempre o elemento eliminado
 * .shift(): retira sempre o primeiro elemento do array e retorna sempre o elemento eliminado
 * 
 * 
 */


 /*Exemplos: */

 var posicoes = ["Primeiro", "Segundo"];
 console.log();
 
 console.log("Array posicoes antes da inserção de novos elementos: " + posicoes + "\n");
 
 posicoes.push("Terceiro","Quarto", "Quinto"); //Método push para adicionar elementos ao array
 console.log("Array posicoes após a inserção de novos elementos: " + posicoes + "\n");

 posicoes.pop(); //Método pop para remover o último elemento do array
 console.log("Array posicoes após a remoção do último elemento: " + posicoes + "\n"); 

 posicoes.shift();
 console.log("Array posicoes após a remoção do primeiro elemento: " + posicoes + "\n"); 
 