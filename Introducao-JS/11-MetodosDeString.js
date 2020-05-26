/** Introdução a Javascript - Métodos de String 
 * 
 * As Srtings fornecem diversos métodos e propriedades para trabalhar com strings
 * Uma string é um array de caracteres.
 * 
 * string.length: Retorna o tamanho/quantidade de caracteres
 * string.indexOf(elemento) -> Procura na string aonde está o conteúdo passado por parâmetro, caso não esteja em nenhum lugar, ele retorna -1
 * string.slice(inicio, final): Pega partes definidas da string e retorna o intervalo (corta trechos)
 * string.trim(): Elimina os espaços do inicio ou do final
 * string.split(): Divide uma string em varias strings e cria um array a partir da string que passamos como separador
 * string.replace(substituir, novaPalavra): Substitui uma parte de uma string por outra.
 */

//Exemplos
var nomeCompleto = "Natali Simoes Aguiar Rocha";

console.log(nomeCompleto.length); //Retorna a quantidade de caracteres da String
console.log(nomeCompleto.indexOf("Rocha")); //Retorna a posição onde o trecho especificado começa
console.log(nomeCompleto.slice(0, 6)); //Retorna o conjunto de caracteres compreendidos entre o intervalo especificado
console.log(nomeCompleto.split(" ")); //Divide a string de acordo com o estaço em diversas strings e cria um vetor para cada elemento
console.log(nomeCompleto.replace("Natali", "Nat")); //Substitui o elemento especificado por outro

