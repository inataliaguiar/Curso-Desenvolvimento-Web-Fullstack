function acontece(vetorHorarios, numAlunos){

    var quantidadePontual = 0;  

    for(var i = 0; i < vetorHorarios.length; i++){

      if(vetorHorarios[i] < 1){
        quantidadePontual++;
      }

    }  
    return quantidadePontual >= numAlunos;
  }
  

var segunda = [1, 2, 4];
var terca = [4, 5, 6];

var dias = [];

dias[0] = segunda;
dias[1] = terca;

console.log(dias);

