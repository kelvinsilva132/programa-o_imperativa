const valores = [1,2,3,4,5,6,7,8];


//for (let i = 0; i < valores.length; i++) {
 //   console.log = (valores[i]*2);


let tabuada = valores.map( function(element){
console.log(element * 2);
});

let novoValores = valores.filter( function(y) { 
    return y % 2 == 0; 
    } ); 
    console.log( novoValores ); 

//array.filter(function(elemento){}

let soma = novoValores.reduce( function(acumulador, valor){ 
    console.log( acumulador , valor); 
    return acumulador + valor; 
    } ); 
    
    console.log(soma); 
    
    valores.forEach( function( elemento ){ 
    console.log( elemento+" * 2 = "+elemento*2 ); 
    } ); 