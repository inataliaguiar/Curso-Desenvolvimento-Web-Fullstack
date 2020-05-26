/** Introdução a Javascript - Condicionais Switch Case
 * 
 * SWITCH CASE: Avalia as condições e a partir do resultado, executa apenas o bloco de comando relativo.
 * O SWITCH CASE é composto por uma expressão a avaliar, seguida de diferentes casos.
 * 
 * switch (expressao) {
 *
 * case valorA:
 * //código que se executa se o valorA é verdadeiro.
 *
 * break;
 *
 * case valorB:
 * //código que se executa se o valorB é verdadeiro.
 *
 * break;
 *
 * default:
 * //codigo que se executada quando nenhum caso é verdadeiro
 * }
 * 
 */

//Exemplos

var idade = 5;

switch (idade) {

    case 10:
        console.log('Tem 10 anos');
        break;

    case 5:
        console.log('Tem 5 anos');
        break;

    default:
        console.log('Idade fora da relação');
}
