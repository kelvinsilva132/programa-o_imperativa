/arquivo grupo.js/
let Grupo = {
    pessoas : [],
    maiorAltura : function(){
        return 'dentro do metodo';
    }, 
    menorAltura : function(){
        return 'dentro do metodo';
    },
    mediaAlturaMulheres : function(){
        let result = this.pessoas.filter( item => item.sexo == "F" );

        return 'dentro do metodo '+result;
    },
    qtdHomens : function(){
        // let result = this.pessoas.filter(function(item){
        //     return item.sexo == "M";
        // });
        let result = this.pessoas.filter( item => item.sexo == "M" );
        return 'Quantidade de Homens '+result.length;
    }
}

module.exports = Grupo;
/arquivo pessoa.js/
let Pessoa = function(altura, sexo){//função construtora 
    this.altura = altura;
    this.sexo = sexo;
}

module.exports = Pessoa;
/arquivo main.js/
const Pessoa = require ('./modulos/Pessoa');
const Grupo = require ('./modulos/Grupo');

Grupo.pessoas.push( new Pessoa(1.80, "M") );
Grupo.pessoas.push( new Pessoa(1.60, "F") );
Grupo.pessoas.push( new Pessoa(1.85, "M") );
Grupo.pessoas.push( new Pessoa(1.65, "F") );
Grupo.pessoas.push( new Pessoa(1.90, "M") );
Grupo.pessoas.push( new Pessoa(1.70, "F") );

console.log( Pessoa );
console.log( Grupo.mediaAlturaMulheres() );
