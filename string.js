//lenght

//ele somara td até mesmo os espaços, o valor sempre sera um numero

let texto = "Eu sou o kelvin"

console.log(texto.length);
//console.log("Eu sou o kelvin".length);

//indexOf
console.log(texto.indexOf("o"));//retorna a numeração da posição do "o"  ----;; si ele retornar -1 a informação não existe

//slice

//console.log(texto.slice(0, 3)); //retorna a palavra 'eu'
let palavra = texto.slice(0,3)
console.log(palavra) //retorna a msm coisa
console.log(texto)

//trim()  --tira os espaços do começo e do final do texto

console.log(texto.trim());

//split

//console.log(texto.split("")); separar as letras eespaços
//console.log(texto.split()) retorna o testo dentro da[]
console.log(texto.split("k")) //retira a letra

///replace

let textoNovo = texto.replace("kelvin", "yasmim")
console.log(textoNovo)
//console.log(texto.replace("kelvin", "yasmim"));//faz a troca igualmente