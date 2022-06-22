// 1
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let novoNumeros = numeros.map(function (elemento) {
    return elemento / numeros.reduce((acumulador, valor) => acumulador + valor);
})

console.log (novoNumeros);

// 2
const palavras = ['maça', 'uva', 'abacaxi', 'gato', 'cachorro'];

let palavrasMaior = (array, num) => 
    array.filter((element) => element.length > num);
    
console.log(palavrasMaior(palavras, 4));