/** Exercício Encontrar texto
 * 
 * Criar uma função que recebe um texto e uma palavra e verifica se a palavra existe no texto
 * 
 */

function menciona(texto, palavra){

    if (texto.indexOf(palavra) == -1){
        return false;
    }else{
        return true;
    }

}

menciona("A natali é legal", "legal");