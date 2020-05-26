/** Introdução a Javascript - Callbacks
 * 
 * Um callback é uma função que se passa como parâmetro para outra função
 * 
 * A função que recebe por parâmetro é a que se encarrega de executar quando é necessário.
 * 
 * Tipos de callback
 *  Anônimo: A função passada como callback não tem nome, por esse motivo elas não podem ser chamadas
 *  por seu nome, precisamos escrevê-la dentro da chamada da função  callback
 * 
 * setTimeout ( function (){
 *  console.log("Hello World!");
 * 
 * } , 1000)
 * 
 */


//Modo 1 (modo normal)
setTimeout ( function (){
    console.log("Hello World!");

} , 1000)

//Modo 2 (Com arrow function)

let meuCallback = () => console.log("Hello World com callback e arrow function");
setTimeout( meuCallback, 1000);


//Outros exemplos
function nomeCompleto(nome, sobrenome){
    return nome + " " + sobrenome;

}


function saudar(nome, sobrenome, callback){
    return "Olá " + callback(nome, sobrenome) + "!";

}

console.log(saudar("Erica","Chata",nomeCompleto));

