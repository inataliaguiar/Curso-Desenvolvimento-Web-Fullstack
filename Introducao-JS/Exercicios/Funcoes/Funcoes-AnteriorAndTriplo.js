function anterior(numero){

    numero--;
    return numero;    
}

function triplo(numero){
    numero *=3;
    return numero;
}

function anteriorDoTriplo(numero){
   var vTriplo = triplo(numero);
   var vAnterior = anterior(vTriplo);
   return vAnterior;
}

console.log(anterior(10));
console.log(triplo(3));
console.log(anteriorDoTriplo(10));


