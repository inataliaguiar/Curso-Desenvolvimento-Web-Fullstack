//Criando um servidor com http

const http = require('http'); //Importanto o módulo http

//Criando um servidor através de arrow functions
http.createServer((requisicao, resposta) =>{
    
    switch(requisicao.url){ //Contem o que o usuario digitou na URL
        //Testa as condicoes do que foi digiado para dar uma resposta ao cliente
        case "/": 
            resposta.end("Você está na página home!")
            break;
        case "/contato":
            resposta.end("Você está na página contato")
            break;
        default:
            resposta.end("Não encontrado!")
            break;
    }



    resposta.writeHead(200, {'Content-type':'text/plain'}); //Cabeçalho da resposta -> codigo + tipo de dado
    resposta.end("Meu primeiro servidor está respondendo") //Envio da resposta do servidor
    
}).listen(3000); //Setando a porta do servidor