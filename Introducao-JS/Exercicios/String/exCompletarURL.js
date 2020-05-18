/** Exercício Completar a URL
 * Criar uma função chamada dominio que receberá uma String "br.dominioGenerico.com" 
 * e sua função será devolver "http://br.dominioGenerico.com".
 * 
 */

 function dominio(url){

    return url.replace(url,"http://" + url);

 }

 console.log(dominio("br.digitalhouse.com"));