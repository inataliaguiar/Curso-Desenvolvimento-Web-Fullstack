/** Introdução a Javascript - Funções.
 * 
 * Funções: Uma função é uma sequencia de ações para chegar a um objetivo, são utilizadas para realizar uma tarefa e retornar um valor.
 * 
 * Composição:
 * Parâmetros: Dentro de uma função, os parâmetros podem ser utilizados como variáveis para receber/manipular valores, são escritos ao criar uma função.
 * Argumentos: São valores que enviamos quando executamos a função.
 * Retorno: É utilizado para retornar  conteúdo da função.
 * 
 * Funções declaradas: Utilizam a estrutura básica das funções e recebe um nome formal que será utilizado para ser invocado.
 * Exemplo:
 * function exibir(nome){
 *   return "Meu nome é: " + nome;
 * } 
 * 
 * Funções expressadas
 * let fazerSushi = funcion(quantidade){
 *   return "repeat".repeat(quantidade);
 * }
 * 
 * Executando uma função:
 * function nomeCompleto(nome, sobrenome){
 *    return "Seu nome completo é: " + nome + " " + sobrenome;
 *
 * }
 * nomeCompleto(); 
 * 
 */

var nome = "Natali";

 //Exemplos
 function somar(a, b){
    return a + b;
 }

 function exibirNome(){
    return "Meu nome é: " + nome;
 }

let fazerSushi = function(quantidade){
    return "Sushi".repeat(quantidade);
}

let fazerCafe = function(quantidade){
    return "Café".repeat(quantidade);
}

 //Passando os argumentos da função e exibindo o resultado no console
 console.log(somar(25,25));
 console.log(exibirNome(nome));
 console.log(fazerSushi(5));
 console.log(fazerCafe(10));


 
 
 