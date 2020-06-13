/**Arquivo principal para importar e utilizar módulos Node */

const fs = require('fs'); //Importando o módulo fs para o node
let moment = require('moment'); //importando o módulo moment para trabalhar com datas
let superHerois = require('./Super_Herois'); //Importando o módulo criado de heróis

//Utilizando o módulo fs
let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf8'); //Abre um arquivo e mostra o seu conteudo

//Utilizando o módulo moment
let data = moment().format('MMM do YY'); //Utilizando o moment para mostrar a data atual

console.log(dados);
console.log(data);
console.log(superHerois);


