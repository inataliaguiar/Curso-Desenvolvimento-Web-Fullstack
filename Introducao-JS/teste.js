/*Para este exercício, fornecemos a função de contagem já declarada. 
Esta função receberá dois parâmetros numéricos. Queremos que a função vá do primeiro 
parâmetro para o segundo e imprima o texto pelo console "O número atual é__ e é menor que__".[

Por exemplo, se passarmos os números 4 e 6, veremos algo assim:

    "O número atual é 4 e é menor que 6"
    "O número atual é 5 e é menor que 6"
*/

function count(inicio, fim) {

    while (inicio < fim) {

        console.log("O numero atual é: " + inicio + " e é menor que " + fim);
        inicio++;

    }
}

count(3, 5);


function imprimir(numeros) {
    var contador = 0;
    var cinco = false;

    do {
        if (numeros[contador] == 5) {
            cinco = true;
            console.log("O número é 5!");

        } else {
            console.log(numeros[contador]);
        }

        contador++;
    } while (cinco == false);

}

console.log(imprimir([1, 2, 3, 4, 5, 6]));

function tabelaDeMultiplicacao(numero) {

    var i = 1;

    while (i <= 10) {
        console.log(numero + " * " + i + " = " + i * numero);
        i++;

    }
}

tabelaDeMultiplicacao(10);