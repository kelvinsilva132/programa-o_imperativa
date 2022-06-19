//----------operações-----------//

//adição


console.log(2+2);

//subtração

console.log(10-5);

//multiplicação

console.log(10*5);

//divisão 

console.log(10/2);

//----------------incremento----//

let numero = 10;
console.log(++numero); //incremento mais 1; ++ no começo 

//console.log(++numero);
//console.log(++numero);//somei mais 3 ao 10

//decremento

console.log(--numero);

//comparação de maior

console.log(10 > 5);

// comparação de menor 

console.log(10 < 5);

// comparaçãode menor ou igual

console.log(3<=3);

//maior ou igual

console.log(20>=20);

//comparação de igualdade

console.log(10 == 10);//10 é igual a 10
//console.log("Ola" == "Ola"); true por que são iguais e funciona com strings

//comparação de igualdade rigido

console.log(5 === "5"); // false pq compara o tipo string e numero
//console.log(5 == "5"); daria 'true' pois mostra os numeros

//comparação de diferente

//eles são diferentes? (funciona com strings)

//console.log(10 != 10); false
console.log(10 != 20); true

//------------//comparação de diferente

console.log(10 !== "10");

//------comparador logico &&------------///

//console.log(10 > 5 && 8 > 10); false
//console.log(10 > 5 && 8 < 10); //true
console.log(10 > 5 && 8 > 10 && 11 > 5);// false pois uma esta errada

//----operador logico OR ||-------/

console.log(10 < 5 || 8 > 10); //true

//console.log(10 > 5 || 8 > 10);false

//comparador negação--//

//console.log(!5 > 3); tudo que era verdade vira mentira

//------operador de concatenar----//

let nome ="Francisco";
let sobrenome = "Kelvin";

//console.log(nome + sobrenome);Nome sem esspaço
console.log(nome + " " + sobrenome); //nome com espaçamento

