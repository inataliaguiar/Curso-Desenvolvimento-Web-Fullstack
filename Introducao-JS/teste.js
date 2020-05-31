/*Para este exercício, fornecemos a função de contagem já declarada. 
Esta função receberá dois parâmetros numéricos. Queremos que a função vá do primeiro 
parâmetro para o segundo e imprima o texto pelo console "O número atual é__ e é menor que__".[

Por exemplo, se passarmos os números 4 e 6, veremos algo assim:

    "O número atual é 4 e é menor que 6"
    "O número atual é 5 e é menor que 6"
*/

let contador = 0;

function count(inicio, fim) {
   
    while(contador < fim){

    contador = inicio;

    console.log("O numero atual é: " + contador + "e é menor que " + fim);
    contador++;
        
    }
}

count(1, 5);