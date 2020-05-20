/** Introdução a Javascript - Conversão de tipos de dados
 * 
 * A conversão dos tipos de dados permite que o os dados presentes em uma variável sejam convertidos para o tipo de dado escolhido
 * typeOf variavel: Retorna o tipo da variável
 * 
 * Métodos de converão: Permitem a conversão dos dados
 * Number(): Permite a conversão de String em Números
 * parseInt(): Converte um tipo de dado em números inteiros
 * parseFloat(): Converte um tipo de dado em números decimais
 * String(): converte um tipo de dado em String
 */

 //Exemplos
 var cor = "Azul";
 var noite = true;
 var diaMes = 19;
 var temperatura = 14.4;
 var carrinho = {
     idProduto: 10,
     nomeProduto: "Celular",
     quantidade: 1,
     preco: 2000
 }
 var diasFinalDeSemana = ["Sábado", "Domingo"];

//Exibindo o tipo dos dados
 console.log(typeof cor);
 console.log(typeof noite);
 console.log(typeof diaMes);
 console.log(typeof temperatura);
 console.log(typeof carrinho);
 console.log(typeof diasFinalDeSemana);

 //Métodos de conversão
 var valor = "10.4";

 Number(valor); //Conversão de string para number
 console.log("O valor convertido de String para numérico é: " + valor + " tipo: " + typeof valor);

 parseInt(valor);
 console.log("O valor convertido de String para inteiro é: " + valor + " tipo: " + typeof valor);

 parseFloat(valor);
 console.log("O valor convertido de String para decimal é: " + valor + " tipo: " + typeof valor);

 String(valor);
 console.log("O valor convertido de numérico para String é: " + valor + " tipo: " + typeof valor);


 //Teste com dois valores
 var numero1 = 10;
 var numero2 = 40;
 var soma = numero1 + numero2;

 console.log("O valor da soma é: " + soma);

 String(numero1);
 String(numero2);

 console.log("A junção do valor após a conversão é: " + numero1 + numero2);
 
 

 
 
 
 
 
 

