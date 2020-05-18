/** Exercício Substituição rápida
 * 
 * Sua missão agora é criar uma função chamada "substituicaoRapida" que você recebe um texto, 
 * uma palavra para procurar e a palavra que substituirá a que você está procurando. A função 
 * deve retornar o texto com a palavra substituída.
 * 
 */

 function substituicaoRapida(texto, palavraProcurar, palavraSubstituir){

    return texto.replace(palavraProcurar, palavraSubstituir);

 }
let novoTexto = substituicaoRapida("Ola mundo", "mundo", "world");
console.log(novoTexto);
