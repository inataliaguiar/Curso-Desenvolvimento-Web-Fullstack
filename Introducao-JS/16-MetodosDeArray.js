/** Introdução a Javascript - Métodos de arrays parte I
 * 
 * Os métodos em arrays permitem trabalhar com as informações presentes em um array de diversas formas
 * 
 * .push(): adiciona um ou mais elementos passados por parâmetro no final do array 
 * .pop(): retira sempre o último elemento do array
 * 
 * 
 * 
 */


 //exemplos:
 var cores = ["Azul", "Vermelho"];
 console.log("Array cores antes da inserção de novos elementos: " + cores);
 
 cores.push("Roxo","Preto", "Branco"); //Método push para adicionar elementos ao array
 console.log("Array cores após a inserção de novos elementos: " + cores);

 cores.pop();
 console.log("Array cores após a remoção do último elemento: " + cores);