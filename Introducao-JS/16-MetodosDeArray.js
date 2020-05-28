/** Introdução a Javascript - Métodos de arrays parte I
 * 
 * Os métodos em arrays permitem trabalhar com as informações presentes em um array de diversas formas
 * 
 * .push(): adiciona um ou mais elementos passados por parâmetro no final do array 
 * .pop(): retira sempre o último elemento do array e retorna sempre o elemento eliminado
 * .swift(): retira sempre o primeiro elemento do array e retorna sempre o elemento eliminado
 * 
 * 
 */


 /*Exemplos: */

 var cores = ["Azul", "Vermelho"];
 console.log("Array cores antes da inserção de novos elementos: " + cores);
 
 cores.push("Roxo","Preto", "Branco"); //Método push para adicionar elementos ao array
 console.log("Array cores após a inserção de novos elementos: " + cores);

 cores.pop(); //Método pop para remover o último elemento do array
 console.log("Array cores após a remoção do último elemento: " + cores); 

 var fila = ["Primeiro cliente","Segundo cliente","Terceiro cliente","Quarto cliente"];
 console.log("Elemento retirado: " + fila.shift()); //Método swift para remover o primeiro elemento de um array
 
 
 