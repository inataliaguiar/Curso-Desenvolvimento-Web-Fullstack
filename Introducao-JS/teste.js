/* function pares(numero){
    let pares = 0;
    for(let i=0; i < numero; i++){
        if(i % 2 == 0){
        pares = pares + 1;
        }
    } return pares;
}
*/

function somaPares(numero){
    let somaPares = 0;

    for(let i = 0; i <= numero; i +=2){
       
        somaPares = somaPares + i;
        
    } return somaPares;
}

console.log(somaPares(10));

