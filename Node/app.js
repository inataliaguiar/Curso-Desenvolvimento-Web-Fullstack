const fs = require('fs'); //Importando o módulo fs para o node

let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf8'); //Abre um arquivo e mostra o seu conteudo

console.log(dados);
