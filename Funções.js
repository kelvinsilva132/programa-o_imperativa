//função declarada ------Function + nome + (){}

function darOi(){
    console.log("Ola tudo Bem");
}

darOi();
darOi();
darOi();//repetira 3 vezes

//-----função expressa  ---- variavel + function +(){}

let somar = function(){
console.log(1 + 1);
};
somar();

//parametros as funções


//let subitrair = function(numA, numB){
    //console.log(numA + numB);    };

    //subitrair(); daria NaN
    //subitrair(1, 2); //somar 1  + 2

    //let resultado = somar(1, 2);
    //console.log(resultado);


let gooll = function (numA, numB){
return numA + numB;
}
gooll(19, 20);

//let resultado = gooll(1, 2);
console.log(resultado);


//escopo

let resultado  = 0;
console.log("resultado fora da função =", resultado);

function multiplicar(numA, numB) {
     resultado = numA * numB;
    
    console.log("resultado dentro da função =", resultado);
}

multiplicar(2, 2);
