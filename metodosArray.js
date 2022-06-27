let meuArray = ['vingadores','thor','minions'];
//console.log( meuArray[2]);//aceesa o minions
//console.log ( meuArray.length); //retorna quantidade somada dos elementos 

let cores = ['Roxo','Azul','Laranja'];

cores.push('violeta'); //adc mais uma cor

console.log (cores);

//cores.push('Cinza','ouro');

//console.log (cores); //retorna 6

//ultimaCor

//let ultimaCor = cores.pop()

//console.log (cores); //["Roxo", "Azul"]
//console.log (ultimaCor);//ouro

//adiciona ao inicio da array 
cores.unshift('Marrom');

//console.log (cores);

//separados por virgula

//let separadosPorVirgula = cores.join();
//console.log (separadosPorVirgula);

 console.log(cores.lastIndexOf("Laranja")); //encontrou oq preocurava. retorna 3 posição do elemento 
console.log (cores.lastIndexOf("Vermelho"));//não encontrou. retorno -1

//retorna booleano 
console.log (cores.includes("Laranja"));