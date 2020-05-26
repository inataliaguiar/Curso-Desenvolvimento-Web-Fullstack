/** Introdução a Javascript - Formato JSON
 * 
 * É um formato/notação simples para realizar a troca de informações/dados entre sistemas diferentes.
 * O JSON é um formato bem parecido ao objeto literal, porém possui as suas diferenças
 * 
 * O Javascript possui dois métodos nativos que permite a conversão de JSON para o formato de objeto e vice-versa
 *
 * Métodos para conversão: 
 * JSON.parse: Converte o formato JSON em algum formato Javascript (objeto ou array)
 */

//JSON para Javascript (objeto ou array)

var formatoJSON = '{"Nome": "Natali", "Idade": 21}'; //Formato JSON

var dadosConvertidos = JSON.parse(formatoJSON); //Conversao do arquivo

//Exibindo os dados 
console.log("*Utilizando o PARSE*");

console.log("Dados em formato JSON");
console.log(formatoJSON);
console.log(" ");

console.log("Dados convertidos(Objeto)");
console.log(dadosConvertidos);
console.log(" ");
console.log("---------------------------------------------------------");
console.log(" ");

//Javascript (objeto ou array) para JSON (stringfy())

var objetoCarro = {
    nome: "Compass",
    marca: "Jeep",
    ano: 2020
}

var dadosConvertidosEmJSON = JSON.stringify(objetoCarro);

//Exibindo os dados 
console.log("*Utilizando o STRINGFY*")
console.log("Dados em formato objeto");
console.log(objetoCarro);
console.log(" ");

console.log("Dados convertidos(JSON)");
console.log(dadosConvertidosEmJSON);


