/** Introdução a Javascript - Desestruturação
 * 
 * É utilizado para extrair dados de arrays ou objetos
 * Utiliza variaveis na mesma posição do elemento que deseja acessar no array e atribuir ao array
 * A destruturação nao altera o valor do array, apenas iguala os valores para que eles sejam acessados e localizados mais facilmente
 * 
 */

//exemplo de criação de objeto para utilizar desestruturação

let pessoa = {
    nome: "Natali",
    idade: 21,
    profissao: "Developer",
    seriesFavoritas: ["Versailles", "Game of thrones"]
}

//Utilizando a desestruturação para pegar o nome e a profissao
let {nome, profissao} = pessoa; //Acessa direto o item do objetos

console.log(nome);

