
const matriz = [1,2,3,4,5]

let soma  = matriz.reduce(function (acumulador,somar) {
    return acumulador + somar

})
console.log(soma)

let divisao = matriz.map(function (x) {
return soma / x
})
console.log(divisao)

//02
const palavras = ['pao','carro','aviao','navio','teclado','mustang']

let contagem = palavras.filter (function contar(b){
    return palavras.length  > b
})
 


console.log ()