/** Introdução a Javascript - For Of e For in
 * 
 * For in: realiza iterações sobre objetos literais 
 *     Sintaxe:
 *     for (var nomeVariavel in objeto){
 *          //Bloco de codigo a ser executado
 *      }
 *      "Significado": Para atributo presente no objeto, faça tal código
 */


 //Criação de um objeto literal

 let pessoa = {
     nome: "Natali",
     idade:21,
     profissao: "Developer"
 }

 for (let caracteristica in pessoa){
    console.log(pessoa[caracteristica]);
 }


 