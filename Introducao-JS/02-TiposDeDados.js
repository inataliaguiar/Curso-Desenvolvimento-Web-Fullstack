/** Introdução a Javascript - Tipos de dados
 * 
 * Os tipos de dados permitem que o JS conheça as características e funcionalidades que estarão dispoíveis para esses dados
 * 
 *  Tipos: 
 * 
 *  Number: Recebe dados do tipo numérico.
 *
 *  Strings: Recebe todos os tipos de textos e deve ser apresentada entre aspas duplas ("") ou simples ('').
 *
 *  Booleanos: São dados lógicos, podem ser verdadeiro (true) ou falso (false). 
 *
 *  NaN (Not a number): Dados que não são números e nenhuma outra coisa.
 *
 *  Null: Atribui um valor nulo.
 *
 *  Undefined: Ainda não tem um valor atribuído.
 *
 *  Objeto Literal: São utilizados para simular objetos da vida real, são compostos pela relação ` chave: valor `.
 *
 * Arrays: São utilizados para armazenar uma coleção de dados, onde cada elemento é identificado por um índice, iniciando em (0) e indo até o último elemento.
 * 
 */

 //Exemplos

 var idade = 21; //Number
 var nome = "Steve"; //String
 var estudante = true; //Boolean
 var notNumber = "a" * 3; //NaN
 var idadeFutura = null; //Null
 var preco; //Undefined
 var carro = {

    nome: "Compass",
    marca: "Jeep",
    ano: 2021

 } //Object
 
 var cores = ["Azul","Branco","Coral"]; //Array

 //Exibindo os tipos
 console.log("Idade: " + idade + " tipo: " + typeof(idade));
 console.log("Nome: " + nome + " tipo: " + typeof(nome));
 console.log("É estudante?: " + estudante + " tipo: " + typeof(estudante));
 console.log("Tipo: " + typeof(notNumber));
 console.log("Tipo idadeFutura: " + typeof(idadeFutura));
 console.log("Tipo preço: " + typeof(preco));
 console.log(carro);
 


