/*JSON (Javascript Object Notation) é um padrão de texto usado para se comunicar entre sistemas.
imagine que cada linguagem seja uma língua diferente, mesmo que elas possuam semelhanças, como strings, booleanos etc, a maneira que cada uma trabalha internamente é diferente.

Pensando nisso, é necessário que exista uma maneira universal de escrita, que todas as linguagens consigam compreender, para que haja comunicação.

Um exemplo seria a nossa língua. Caso alguém fale português, provavelmente não entenderá o italiano, porém como o inglês é uma língua universal, ambos devem saber falar e entendê-la, sendo possível se comunicar.

Qualquer linguagem entende JSON, e devido a isso é possível que os sistemas, mesmo criados com linguagens diferentes, se comuniquem com base nesse padrão textual. */

let pessoa = {
    nome : "Kelvin",
    idade: 20,
    altura: 1.72
};
 let listaCompras = ["pão", "presunto", "queijo"]

let json = JSON.stringify(listaCompras);

//console.log(json); // === {"nome":"Kelvin","idade":20,"altura":1.72}

//let objetoDeNovo = JSON.parse(json);
//console.log(objetoDeNovo);
//console.log(json) /// = ["pão","presunto","queijo"]


let arrayDeNovo = JSON.parse(json)
console.log(arrayDeNovo)// == [ 'pão', 'presunto', 'queijo' ]