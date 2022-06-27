//objetos {}

/*let pais = {
    //nome : "Brasil",
    nome : "Italia",
    capital: "Brasilia",
    nacionalidade: function () {
   return "sou do" +this.nome;
    },
};
/*console.log(pais)  // ==  { nome: 'Brasil', capital: 'Brasilia' }
console.log(pais.nome); // == Brasil
console.log(pais.capital) // == Brasilia
console.log(pais["nome"]); // == Brasila 
console.log(pais["no"]); // == errei o nome = undefined
*/

//this prpriedade interna
console.log(pais.nacionalidade())

//geral varios objetos

let Carro = {
Marca : "Fiat",
Modelo: "Uno",
};

function Carro(ValorMarca, ValorModelo){
this.Marca = ValorMarca;
this.Modelo = ValorModelo;
};

console.log(Carro);
console.log(new Carro("Renaut", "Clio"));