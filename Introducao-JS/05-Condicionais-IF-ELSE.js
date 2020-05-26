/** Introdução a Javascript - Condicionais IF/ELSE IF/ELSE
 * 
 * Estruturas condicionais permitem avaliar as condições e realizar difernetes ações de acordo com o ressultado dessas avaliações.
 *
 * Sintaxe:
 * if (condicao){
 *  //codigo a se executar se a condicao for verdadeira
 * 
 * } else {
 *  //codigo a executar se a condicao é falsa
 *
 * }
 * 
 * Condicional com blocos ELSE IF:
 * if (condicao){
 *   //codigo a se executar se a condicao for verdadeira
 *
 * } else if (outra condicao){
 *   //codigo a se executar se a  outra condicao for verdadeira
 * 
 * } else {
 *  //codigo a executar se a condicao é falsa
 * }
 * 
 * 
 * IF TERNARIO: É escrito de forma horizontal e não é necessário utilizar as palavras "if" e "else"
 * Sintaxe:
 * condicao ? primeira expressao: segunda expressao
 */

//Exemplo - Modo 01
var idade = 18;
var acesso = '';

if (idade < 16){
    acesso = 'proibido';

} else if (idade >= 16 && idade < 18){
    acesso = 'permitido com a entrada de um maior de idade';
} else {
    acesso = 'permitido';

}

//Exemplo - Modo 02
var comparacao = 4 > 10 ? 'O 4 é maior' : 'O 10 é maior';

console.log("Acesso: " + acesso);

console.log("Comparação entre 4 e 10: " +  comparacao);

