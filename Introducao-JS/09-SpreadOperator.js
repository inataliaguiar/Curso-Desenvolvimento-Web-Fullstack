/** Introdução a Javascript - Stread Operator
 * 
 * Permite combinar os valores de arrays e objetos, criando uma nova estrutura contendo a combinação
 */

 //Spread operator com arrays
var frutas1 = ["Uva","Maracujá","Maçã"]; //Array 1
var frutas2 = ["Banana","Goiaba","Melancia"]; //Array 2

var combinacaoFrutas= [...frutas1, ...frutas2]; //Array que engloba ambos os elementos

console.log(combinacaoFrutas);

//Spread operator com objetos

let pessoa = {
    nome: "Natali",
    idade: 21

}

let infoPessoal = {
    tel: 12345678,
    rg: 1025678854,
    ...pessoa //Pega as informações do objeto pessoa e insere no objeto infoPessola
    
}

console.log(infoPessoal);

//Spread Operator com funções
function letras(...parametros){ //Define um parâmetro que é capaz de receber valores diferentes em cada execução
    console.log(parametros);

}

letras("a"); //Recebe inicialmente 1 parâmetro
letras("a", "b"); //Recebe 2 parâmetros
letras("a", "b", "c"); //Recebe 3 parâmetros