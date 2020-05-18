/** Introdução a Javascript - Estruturas de repeticao While e Do While
 * 
 * O ciclo While executará o bloco de código enquanto determinada condição for verdadeira
 * 
 * Sintaxe:
 * while(condicao){
 *   //bloco de código a ser executado
 * }
 * 
 * Ciclo DO WHILE
 * 
 * O ciclo Do while executa primeiro um bloco de código e depois checa a condição, dessa forma, o código será executado pelo menos uma vez, e enquanto a condição for verdadeira, o bloco continuará sendo executado
 *
 * Sintaxe:
 * do {
 *      //Bloco de código a ser executado
 * }while (condicao);
 * 
 * 
 * Em ambos os ciclos, é necessário definir uma condição de parada, senão o código será repetido infinitamente
 * */

//Exemplos:

var contador = 1;
var contador2 = 1;

while (contador <=7){
    console.log("Ainda estamos na primeira semana! Esse é o dia: " + contador);
    contador++;
}

var adivinhar = 13;

do {
    console.log("Estamos repetindo até que o número seja adivinhado");
    contador2++;
}while(contador2 != adivinhar);