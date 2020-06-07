/** Introdução a Javascript - For Of e For in
 * 
 * For in: realiza iterações sobre objetos literais 
 *     Sintaxe:
 *     for (var nomeVariavel in objeto){
 *          //Bloco de codigo a ser executado
 *      }
 *      "Significado": Para atributo presente no objeto, faça tal código
 *
 * For of: realiza iterações sobre arrays
 *     Sintaxe:
 *     for (var nomeVariavel in array){
 *         //Bloco de código a ser executado
 *     }
 * 
 */


 //Criação de um objeto literal para utilizar o for in

 let pessoa = {
     nome: "Natali",
     idade:21,
     profissao: "Developer"
 }

 for (let caracteristica in pessoa){
    console.log(pessoa[caracteristica]);
 }

//Criação de um array para utilizar o for of
 
 let series = ["Versailles", "Outlander", "Game of thrones", "Vikings"];

 for(let valor of series){
     console.log(valor);
     
 }


 