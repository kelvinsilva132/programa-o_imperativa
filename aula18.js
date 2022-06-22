// 1 - Loop de Pares

function loopDePares (x){
  for ( let i = 0; i <=100; i++ ){
      console.log(i)
      if ((x + i ) % 2 == 0){
          console.log( "O número", i, "é par")
      }
  }
}

console.log(loopDePares(100));

// 2 - Loop ímpares com palavra

function loopDeImpares (x,y){
  for ( let i = 0; i <=100; i++ ){
      console.log(i)
      if ((x + i ) % 2 != 0){
          console.log(y)
      }
  }
}

console.log(loopDeImpares(100,"Programação"));

// 3 - Soma

function soma(x){
  let numeros = 0;
  for(let i = 0; i<=x; i++){
    numeros += i;
  }
  return numeros
}
console.log(soma(8));

// 4. Novo Array

function newArray (num) {
  let list = []
  for (let i = 1; i <= num; i++){
      list.push(i);
  }
 return list
}
console.log (newArray(10));    

// 5. String.split()

function split (palavra){
  list = [];
  for(let i = 0; i < palavra.length; i++){
    list.push(palavra[i]);
  }
  return list
}

console.log(split('Hello'))

// 6. Mover os zeros para o final

function moverZeros (list) {
 let [zeros, semZeros] = [[], []]; 
 let result = list.filter (element => element == 0 ? zeros.push(element) : semZeros.push(element));;
 return semZeros.concat(zeros);
}

let list = [0,4,9,7,5,0,3,2,0,79,10,6];

console.log (moverZeros(list)); 

// 7. Lidando com dois arrays

let array1 = [1, 2, 3]
let array2 = ["O", "l", "á"]

function arrayHandler (array1, array2) {
  for (let i = 0; i < array1.length || i < array2.length; i++) {
      console.log (`Eu sou ${array1[i]} e eu sou ${array2[i]}`);
  }
};

console.log(arrayHandler (array1,array2));

// 8. Arrays de objetos

function arrayObjects (x) {
 let objetos = [];
 for (let i = 1; i <= x; i++) {
     objetos.push({Valor: i});
 }
 return objetos;
}

console.log(arrayObjects (4));

// 9.Arrays de objetos 2

function arrayObjectsTwo (x, y) {
 let objetosDois = [];
 for (let i = 1; i <= x; i++) {
     objetosDois.push({[y] : i});
 }
 return objetosDois;
}

console.log(arrayObjectsTwo (4, "Hello"));