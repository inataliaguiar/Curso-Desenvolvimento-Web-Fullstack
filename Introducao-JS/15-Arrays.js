/** Introdução a Javascript - Arrays
 * 
 * Arrays são estruturas que permitem gerar uma coleção de dados ordenados de diferentes tipos
 * 
 * Indice: Cada elemento dentro de um array ocupa uma "posição", sendo que a contagem das posições se inicia em 0 e vai até o tamanho do array
 * 
 * Sintaxe:
 * var nomeArray = ["Elemento 1", 10, true];
 * Posiçào/índice =>   0          1     2
 * 
 * Para acessar um índice, basta indicar o nome do array e a posição, conforme exemplo abaixo:
 * nomeArray[2]; => irá retornar o elemento contido na posição 2 do array, nesse caso "true"
 */

let cores = ["Azul", "Vermelho", "Roxo", "Preto", "Rosa"];

console.log("Conteúdo do array cores: " + cores + "\n");

//Percorrendo um array e mostrando a cor presente em cada posição
for (var i = 0; i < cores.length; i++) {
    console.log("A cor presente na posição " + i + " é " + cores[i]);
}


